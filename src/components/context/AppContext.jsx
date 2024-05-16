import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/services/supabase";
import PropsTypes from "prop-types";

const initalState = {
  theme: "system",
  setTheme: () => null,
  userSession: null,
  loadingState: {
    loading: true,
    setLoading: () => null,
  },
  authUrlState: {
    authUrl: null,
    setAuthUrl: () => null,
  },
};

const ThemeProviderContext = createContext(initalState);

export function AppContext({
  defaultTheme = "system",
  storageKey = "ui-theme",
  children,
  ...props
}) {
  function OpenWindowAuth() {
    const x = (window.innerWidth - 800) / 2;
    const y = (window.innerHeight - 900) / 2;

    const authWindow = window.open(
      "",
      "Sign In Account",
      `width=800,height=900,top=${y},left=${x}`
    );

    return authWindow;
  }

  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  const [userSession, setUserSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [urlAuth, setUrlAuth] = useState(null);

  useEffect(() => {
    async function getSessionUser() {
      const { data } = await supabase.auth.getSession();

      if (data) {
        const { session } = data;
        setUserSession(session);

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
          if (session?.user && OpenWindowAuth()) {
            OpenWindowAuth().close();
          }
          setUrlAuth(null);
          setUserSession(session?.user);
        });

        return () => subscription.unsubscribe();
      }
      return;
    }

    getSessionUser();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);

      return;
    }

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (loading) {
      const timerLoading = setTimeout(() => setLoading(false), 1000);
      return () => clearInterval(timerLoading);
    }
    return;
  }, [loading]);

  useEffect(() => {
    if (urlAuth) {
      OpenWindowAuth().location = urlAuth;
    }
  }, [urlAuth]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    userSession,
    loadingState: {
      loading,
      setLoading: (status) => setLoading(status),
    },
    authUrlState: {
      urlAuth,
      setAuthUrl: (url) => setUrlAuth(url),
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

AppContext.propTypes = {
  defaultTheme: PropsTypes.string,
  storageKey: PropsTypes.string,
  children: PropsTypes.element,
};

export const UseAppContext = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
