import React from "react";

export const ChangeSize = ({ size, onChange }) => {
  return (
    <select
      value={size}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{
        padding: "4px 8px",
        borderRadius: 6,
        border: "1px solid var(--border)",
        background: "var(--tile)",
        color: "var(--text)",
        fontWeight: 500,
      }}
    >
      {[3, 4].map((n) => (
        <option key={n} value={n}>
          {n}×{n}
        </option>
      ))}
    </select>
  );
};
