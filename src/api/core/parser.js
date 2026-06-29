import { ApiError } from "./errors";

export async function parseResponse(response) {
  if (response.status === 204) return null;

  const contentType = response.headers.get("content-type") || "";
  let payload = null;

  try {
    payload = contentType.includes("application/json")
      ? await response.json()
      : await response.text();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const message =
      typeof payload === "object" && payload !== null
        ? payload.message || "Request failed"
        : payload || "Request failed";

    throw new ApiError({
      status: response.status,
      message,
      errors:
        typeof payload === "object" && payload !== null ? payload.errors : null,
      data:
        typeof payload === "object" && payload !== null ? payload.data : null,
    });
  }

  if (typeof payload === "string") {
    return payload;
  }

  if (payload && payload.success === false) {
    throw new ApiError({
      status: response.status,
      message: payload.message || "Request failed",
      errors: payload.errors,
      data: payload.data,
    });
  }

  if (payload && typeof payload === "object") {
    return payload.data ?? payload;
  }

  return payload;
}
