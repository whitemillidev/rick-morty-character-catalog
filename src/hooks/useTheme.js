import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
