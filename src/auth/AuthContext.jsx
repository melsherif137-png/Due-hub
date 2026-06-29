import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/auth.service";
import { storage } from "../utils/storage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.getUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    try {
      if (!storage.getAccessToken()) return;

      const me = await authService.me();

      setUser(me);

      storage.setUser(me);
    } catch {
      storage.clear();
    } finally {
      setLoading(false);
    }
  }

  async function login(data) {
    const auth = await authService.login(data);

    setUser(auth.user);

    return auth;
  }

  async function register(data) {
    const auth = await authService.register(data);

    setUser(auth.user);

    return auth;
  }

  async function logout() {
    await authService.logout();

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
