import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedThemes = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedThemes) {
      setTheme(savedThemes);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dark-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeInfo = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     const savedThemes = localStorage.getItem("theme");
//     return savedThemes ? savedThemes : "light";
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (theme === "dark") {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       console.log("PROVIDER: Added 'dark' class to <html>");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       console.log("PROVIDER: Removed 'dark' class from <html>"); // <--- ADD THIS
//     }
//   }, [theme]);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     const savedThemes = localStorage.getItem("theme");
//     console.log("1. ThemeProvider: Initializing theme to:", savedThemes ? savedThemes : "light");
//     return savedThemes ? savedThemes : "light";
//   });

//   useEffect(() => {
//     console.log("2. ThemeProvider: useEffect callback invoked for theme:", theme); // Confirm useEffect runs

//     const root = window.document.documentElement;
//     console.log("3. ThemeProvider: root element (<html>) is:", root); // Confirm root is valid

//     if (theme === "dark") {
//       console.log("4. ThemeProvider: Condition 'theme === \"dark\"' is TRUE. Attempting to ADD 'dark' class.");
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       console.log("5. ThemeProvider: Added 'dark' class. Current <html> classes:", root.classList);
//     } else {
//       console.log("4. ThemeProvider: Condition 'theme === \"dark\"' is FALSE. Attempting to REMOVE 'dark' class.");
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       console.log("5. ThemeProvider: Removed 'dark' class. Current <html> classes:", root.classList);
//     }
//   }, [theme]);
