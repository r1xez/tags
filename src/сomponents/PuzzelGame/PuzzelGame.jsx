import React, { useState, useMemo, useEffect, useContext } from "react";
import { canMove, createSolved, isSolved, shuffleSolvable } from "../../utils/puzzel";
import { Board } from "../board/Board";
import { Controls } from "../controls/Controls";
import StatsBar from "../stats/StatsBar";
import { ThemeContext } from "../../context/ThemeContext";

export default function PuzzelGame() {
  const [size, setSize] = useState(4);
  const [tiles, setTiles] = useState([]);
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (!started) return;
    const id = setInterval(
      () => setSeconds(Math.floor((Date.now() - started) / 1000)),
      1000
    );
    return () => clearInterval(id);
  }, [started]);

  useEffect(() => {
    restart(size);
  }, [size]);

  const restart = (n) => {
    const array = createSolved(n);
    const shuffled = shuffleSolvable(array, n);
    setTiles(shuffled);
    setMoves(0);
    setSeconds(0);
    setStarted(Date.now());
  };

  const onTileClick = (index) => {
    const zeroIndex = tiles.indexOf(0);
    if (!canMove(index, zeroIndex, size)) return;

    const next = tiles.slice();
    [next[index], next[zeroIndex]] = [next[zeroIndex], next[index]];
    setTiles(next);
    setMoves((prev) => prev + 1);
    if (!started) setStarted(Date.now());
  };

  const won = useMemo(() => isSolved(tiles), [tiles]);

  return (
    <div
      style={{
        width: "min(560px,94vw)",
        background: "var(--panel)",
        color: "var(--text)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        boxShadow:
          theme === "dark"
            ? "0 10px 30px rgba(0,0,0,0.35)"
            : "0 10px 30px rgba(0,0,0,0.07)",
        padding: 20,
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h1 style={{ fontSize: 20, margin: 0 }}>П'ятнашки</h1>
      </header>

      <Controls
        size={size}
        setSize={setSize}
        restart={restart}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <StatsBar moves={moves} seconds={seconds} won={won} />

      <Board size={size} tiles={tiles} onTileClick={onTileClick} />

      {won && (
        <p
          style={{
            marginTop: 16,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Вітаю! Головоломку зібрано за {moves} ходів, за {seconds} секунд.
        </p>
      )}

      <footer
        style={{
          marginTop: 8,
          color: "var(--muted)",
          fontSize: 12,
          textAlign: "center",
        }}
      >
        ЛКМ або торкніться плитки, що прилягає до порожнього місця, щоб
        перемістити її.
      </footer>
    </div>
  );
};
