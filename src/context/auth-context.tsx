import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { demoAuth } from "@/demo-data";

const AUTH_STORAGE_KEY = "axel-auth";

interface AuthContextValue {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(saved === "1");
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      login: (email, password) => {
        const ok =
          normalizeEmail(email) === normalizeEmail(demoAuth.email) &&
          password === demoAuth.password;
        if (ok) {
          window.localStorage.setItem(AUTH_STORAGE_KEY, "1");
          setIsAuthenticated(true);
        }
        return ok;
      },
      logout: () => {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
        setIsAuthenticated(false);
      },
    }),
    [isAuthenticated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
