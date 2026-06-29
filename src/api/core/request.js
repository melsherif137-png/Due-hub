import { ENV } from "../../config/env";
import { storage } from "../../utils/storage";
import { parseResponse } from "./parser";
import { ApiError, handleApiError } from "./errors";
import { ENDPOINTS } from "../endpoints";
import { getDeviceInfo } from "../../utils/deviceInfo";

import {
  getIsRefreshing,
  setRefreshing,
  subscribe,
  resolveQueue,
  rejectQueue,
  clearQueue,
} from "./refreshQueue";

function isOnline() {
  return typeof navigator === "undefined" ? true : navigator.onLine;
}

function getUrl(endpoint) {
  const baseUrl = ENV.API_URL ? ENV.API_URL.replace(/\/$/, "") : "";
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  if (!baseUrl) {
    return `/api/${ENV.API_VERSION}${cleanEndpoint}`;
  }

  return `${baseUrl}/api/${ENV.API_VERSION}${cleanEndpoint}`;
}

function buildHeaders(token, options = {}) {
  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");

  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
}

async function refreshAccessToken() {
  const refreshToken = storage.getRefreshToken();

  if (!refreshToken) {
    throw new ApiError({
      status: 401,
      message: "Session expired. Please login again.",
    });
  }

  const response = await fetch(getUrl(ENDPOINTS.AUTH.REFRESH), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken,
      deviceInfo: getDeviceInfo(),
    }),
  });

  const payload = await parseResponse(response);

  if (!payload?.accessToken) {
    throw new ApiError({
      status: 401,
      message: "Unable to refresh session.",
    });
  }

  storage.setAccessToken(payload.accessToken);

  if (payload.refreshToken) {
    storage.setRefreshToken(payload.refreshToken);
  }

  if (payload.user) {
    storage.setUser(payload.user);
  }

  return payload.accessToken;
}

function waitForRefresh() {
  return new Promise((resolve, reject) => {
    subscribe((result) => {
      if (result.ok) {
        resolve(result.token);
      } else {
        reject(result.error);
      }
    });
  });
}

async function handleUnauthorized(endpoint, options = {}) {
  if (getIsRefreshing()) {
    const freshToken = await waitForRefresh();
    const headers = buildHeaders(freshToken, options);
    return request(endpoint, { ...options, headers, _retry: true });
  }

  setRefreshing(true);

  try {
    const freshToken = await refreshAccessToken();
    resolveQueue({ ok: true, token: freshToken });

    const headers = buildHeaders(freshToken, options);
    return request(endpoint, { ...options, headers, _retry: true });
  } catch (error) {
    rejectQueue({ ok: false, error });
    storage.clear();
    throw error;
  } finally {
    setRefreshing(false);
    clearQueue();
  }
}

export async function request(endpoint, options = {}) {
  if (!isOnline()) {
    throw new ApiError({
      status: 0,
      message: "No internet connection",
    });
  }

  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    Number(ENV.API_TIMEOUT) || 15000,
  );

  try {
    const token = storage.getAccessToken();
    const headers = buildHeaders(token, options);

    const response = await fetch(getUrl(endpoint), {
      ...options,
      headers,
      signal: controller.signal,
      credentials: "include",
    });

    clearTimeout(timeout);

    if (response.status === 401) {
      if (options._retry) {
        storage.clear();
        throw new ApiError({
          status: 401,
          message: "Session expired. Please login again.",
        });
      }

      return handleUnauthorized(endpoint, options);
    }

    return await parseResponse(response);
  } catch (error) {
    clearTimeout(timeout);

    if (error.name === "AbortError") {
      throw new ApiError({
        status: 408,
        message: "Request Timeout",
      });
    }

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new ApiError({
        status: 0,
        message:
          "تعذر الوصول إلى الخادم. افحص اتصال الإنترنت أو عنوان الباك إند.",
      });
    }

    throw new ApiError({
      status: 500,
      message: error.message || "Request failed",
    });
  }
}

export async function requestWithHandling(endpoint, options = {}) {
  try {
    return await request(endpoint, options);
  } catch (error) {
    handleApiError(error, options);
    throw error;
  }
}
