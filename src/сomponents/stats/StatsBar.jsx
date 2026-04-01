import { formatTime } from "../../utils/puzzel"

export default function StatsBar({ moves, seconds, won }) {
    return (
        <div style={{
            marginTop: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <span style={{
                color: "var(--muted)",
                fontSize: "12px",
            }}>
                Ходи</span>
            <strong>{moves}</strong>
            <span style={{
                color: "var(--muted)",
                fontSize: "12px",
            }}>Час</span>
            <strong>{seconds}</strong>
            <span style={{
                color: "var(--muted)",
                fontSize: "12px",
            }}>Статус</span>
            <strong>{won ? "Виграно" : "В процесі"}</strong>


        </div>
    )
} 