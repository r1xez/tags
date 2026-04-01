import React from "react";

export const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      style={{
        padding: "6px 12px",
        borderRadius: 6,
        border: "1px solid var(--border)",
        background: "var(--tile)",
        color: "var(--text)",
        fontWeight: 500,
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Темна тема" : "☀️ Світла тема"}
    </button>
  );
};
