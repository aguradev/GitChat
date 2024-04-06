import { createContext, useContext, useEffect, useState } from "react";

const initalState = {
  theme: "system",
  setTheme: () => null,
};

const themeProviderContext = createContext(initalState);

function ThemeProvider({
  defaultTheme = "system",
  storageKey = "ui-theme",
  children,
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

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

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <themeProviderContext.Provider {...props} value={value}>
      {children}
    </themeProviderContext.Provider>
  );
}

const UseTheme = () => {
  const context = useContext(themeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export { UseTheme, ThemeProvider };
