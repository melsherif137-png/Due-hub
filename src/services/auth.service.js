import api from "../api/client/client";
import { ENDPOINTS } from "../api/endpoints";
import { storage } from "../utils/storage";
import { getDeviceInfo } from "../utils/deviceInfo";

class AuthService {
  async login(data) {
    const auth = await api.post(ENDPOINTS.AUTH.LOGIN, {
      ...data,
      deviceInfo: getDeviceInfo(),
    });

    storage.setAccessToken(auth.accessToken);
    storage.setRefreshToken(auth.refreshToken);
    storage.setUser(auth.user);

    return auth;
  }

  async register(data) {
    const [firstName = "", lastName = ""] = (data.fullName || data.name || "")
      .trim()
      .split(/\s+/);

    const payload = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword || data.password,
      firstName: firstName || data.firstName || "User",
      lastName: lastName || data.lastName || "",
      role: data.role || "student",
      tenantId: data.tenantId || "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    };

    const auth = await api.post(ENDPOINTS.AUTH.REGISTER, payload);

    storage.setAccessToken(auth.accessToken);
    storage.setRefreshToken(auth.refreshToken);
    storage.setUser(auth.user);

    return auth;
  }

  async me() {
    return await api.get(ENDPOINTS.AUTH.ME);
  }

  async logout() {
    try {
      await api.post(ENDPOINTS.AUTH.LOGOUT, {
        refreshToken: storage.getRefreshToken(),
      });
    } finally {
      storage.clear();
    }
  }

  async refresh() {
    const auth = await api.post(ENDPOINTS.AUTH.REFRESH, {
      refreshToken: storage.getRefreshToken(),
      deviceInfo: getDeviceInfo(),
    });

    storage.setAccessToken(auth.accessToken);
    storage.setRefreshToken(auth.refreshToken);
    storage.setUser(auth.user);

    return auth.accessToken;
  }
}

export default new AuthService();
