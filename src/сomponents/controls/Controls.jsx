import React from "react";
import { ChangeSize } from "../../ui/ChangeSize";
import { ThemeToggle } from "../../ui/ThemeToggle";
import { Mix } from "../../ui/Mix";

export const Controls = ({ size, setSize, restart, theme, toggleTheme }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
        flexWrap: "wrap",
      }}
    >
      <ChangeSize size={size} onChange={setSize} />
      <Mix onMix={() => restart(size)} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  );
};
