/**
 * В этом примере hook отслеживает текущее положение указателя.
 * Затем мы используем другой hook, который возвращает отложенное значение.
 * В итоге мы получаем 5 точек, которые следуют друг за другом с небольшой задержкой.
 * Вы можете поиграться с параметром delay, чтобы увидеть, как он влияет на движение точек.
 * В этом примере мы используем setTimeout для создания задержки, но вы также можете использовать requestAnimationFrame для более плавного эффекта.
 * Вы можете создать столько отложенных значений, сколько захотите, чтобы создать эффект "хвоста" за указателем.
 * Этот пример демонстрирует, как можно использовать хуки для создания сложных анимаций и эффектов в React.
*/
import { useState, useEffect, useRef } from "react";
import { usePointerPosition } from "./usePointerPosition.js";

function useDelayedValue(value, delay) {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setDelayedValue(value);
        }, delay);
    }, [value, delay]);

    return delayedValue;
}

export default function DotsMoveDelay() {
	const containerRef = useRef(null);

    const pos1 = usePointerPosition(containerRef);
    const pos2 = useDelayedValue(pos1, 200);
    const pos3 = useDelayedValue(pos2, 200);
    const pos4 = useDelayedValue(pos3, 200);
    const pos5 = useDelayedValue(pos4, 100);
    return (
        <article
            className="article"
            ref={containerRef}
            style={{
                position: "relative",
                overflow: "hidden",
                width: 580,
                height: 250,
            }}
        >
            <Dot position={pos1} opacity={1} />
            <Dot position={pos2} opacity={0.8} />
            <Dot position={pos3} opacity={0.6} />
            <Dot position={pos4} opacity={0.4} />
            <Dot position={pos5} opacity={0.2} />
        </article>
    );
}

function Dot({ position, opacity }) {
    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: "pink",
                borderRadius: "50%",
                opacity,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: "none",
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }}
        />
    );
}
