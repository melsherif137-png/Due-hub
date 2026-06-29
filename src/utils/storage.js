const ACCESS = "access_token";
const REFRESH = "refresh_token";
const USER = "user";

function getStorage() {
  if (typeof window === "undefined" || !window.localStorage) return null;
  return window.localStorage;
}

function setItem(key, value) {
  const storage = getStorage();

  if (!storage) return;

  try {
    storage.setItem(key, value);
  } catch {
    // ignore storage write failures
  }
}

function getItem(key) {
  const storage = getStorage();

  if (!storage) return null;

  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function removeItem(key) {
  const storage = getStorage();

  if (!storage) return;

  try {
    storage.removeItem(key);
  } catch {
    // ignore storage removal failures
  }
}

export const storage = {
  getAccessToken: () => getItem(ACCESS),

  setAccessToken: (value) => {
    if (value === null || value === undefined || value === "") {
      removeItem(ACCESS);
      return;
    }

    setItem(ACCESS, value);
  },

  getRefreshToken: () => getItem(REFRESH),

  setRefreshToken: (value) => {
    if (value === null || value === undefined || value === "") {
      removeItem(REFRESH);
      return;
    }

    setItem(REFRESH, value);
  },

  getUser: () => {
    const user = getItem(USER);

    if (!user) return null;

    try {
      return JSON.parse(user);
    } catch {
      removeItem(USER);
      return null;
    }
  },

  setUser: (user) => {
    if (!user) {
      removeItem(USER);
      return;
    }

    setItem(USER, JSON.stringify(user));
  },

  clear() {
    removeItem(ACCESS);
    removeItem(REFRESH);
    removeItem(USER);
  },
};
