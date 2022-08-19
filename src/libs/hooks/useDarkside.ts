import { useEffect, useState } from "react";

export const useDarkSide = () => {
  const [theme, setTheme] = useState("dark");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const rootElement = window.document.documentElement;
    rootElement.classList.remove(colorTheme);
    rootElement.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("@wordscube.theme", theme);
    } else {
      localStorage.removeItem("@wordscube.theme");
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
