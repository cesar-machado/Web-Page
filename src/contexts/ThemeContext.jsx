import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider(props) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const storagedTheme = localStorage.getItem("theme");

    return storagedTheme ?? "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  function toggleTheme() {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
