import { useState, useEffect, useRef } from "react";

export default function DotMove() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [canMove, setCanMove] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
		function handleMove(e) {
			if (canMove) {
				const rect = containerRef.current.getBoundingClientRect();
                setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }
        }

        window.addEventListener("pointermove", handleMove);
        return () => window.removeEventListener("pointermove", handleMove);
    }, [canMove]);

    return (
        <article className="article">
            <label className="label-item label-item--nerrow">
                <input
                    type="checkbox"
                    checked={canMove}
                    onChange={(e) => setCanMove(e.target.checked)}
                />
                The dot is allowed to move
            </label>
            <hr />
			<div
				ref={containerRef}
                className=""
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: 580,
                    height: 250,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        backgroundColor: "pink",
                        borderRadius: "50%",
                        opacity: 0.6,
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        pointerEvents: "none",
                        left: -20,
                        top: -20,
                        width: 40,
                        height: 40,
                    }}
                />
            </div>
        </article>
    );
}
