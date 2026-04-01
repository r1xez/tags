import React from "react";

export const Mix = ({ onMix }) => {
  return (
    <button
      onClick={onMix}
      style={{
        padding: "6px 12px",
        borderRadius: 6,
        border: "1px solid var(--border)",
        background: "var(--tile)",
        color: "var(--text)",
        fontWeight: 500,
        cursor: "pointer"
      }}
    >
      Перемішати
    </button>
  );
};
