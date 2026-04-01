import React, { createContext, useState, useMemo, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const themeVars = useMemo(() => {
        return theme === "dark"
            ? {
                "--bg": "#0f1115",
                "--panel": "#151923",
                "--text": "#eef1f6",
                "--muted": "#9aa4b2",
                "--accent": "#4f7cff",
                "--tile": "#1f2430",
                "--tileText": "#e6ebf5",
                "--tileEmpty": "#12151c",
                "--border": "#2a3040",
            }
            : {
                "--bg": "#f7f8fb",
                "--panel": "#ffffff",
                "--text": "#0f172a",
                "--muted": "#5b6472",
                "--accent": "#3b82f6",
                "--tile": "#f0f3f9",
                "--tileText": "#0f172a",
                "--tileEmpty": "#e9edf5",
                "--border": "#d7dde8",
            };
    }, [theme]);


    Object.keys(themeVars).forEach((key) => {
        document.documentElement.style.setProperty(key, themeVars[key]);
    });

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeVars }}>
            {children}
        </ThemeContext.Provider>
    );
};
