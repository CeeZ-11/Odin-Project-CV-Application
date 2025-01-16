import { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const body = document.body;

    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      setIsDarkMode(true);
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      setIsDarkMode(false);
    }
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("dark-theme");
      setIsDarkMode(true);
    } else {
      document.body.classList.add("light-theme");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggleButton;
