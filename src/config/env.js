function normalizeApiUrl(url) {
  if (!url) return "";

  return url
    .trim()
    .replace(/\/swagger\/index\.html$/i, "")
    .replace(/\/swagger$/i, "")
    .replace(/\/$/, "")
    .replace(/^https:\/\//i, "http://");
}

const rawApiUrl = import.meta.env.VITE_API_URL || "";

export const ENV = Object.freeze({
  API_URL: rawApiUrl ? normalizeApiUrl(rawApiUrl) : "",
  API_VERSION: import.meta.env.VITE_API_VERSION,
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 15000,
});

if (!ENV.API_URL) {
  throw new Error("Missing VITE_API_URL");
}
