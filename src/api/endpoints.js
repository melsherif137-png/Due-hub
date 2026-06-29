export const ENDPOINTS = Object.freeze({
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    ENABLE_2FA: "/auth/enable-2fa",
    CHANGE_PASSWORD: "/auth/change-password",
  },

  USER: {
    PROFILE: "/users/profile",
    UPDATE_PROFILE: "/users/profile",
  },
});
