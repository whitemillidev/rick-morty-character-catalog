import React from "react";
import useTheme from "../hooks/useTheme";


export default function TestUseTheme() {
  const [theme, setTheme] = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Theme reverse</button>
    </div>
  );
}
