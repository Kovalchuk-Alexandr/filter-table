import { useState } from "react";

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
	return (
        <article className="article">
            <h3>MovingDot</h3>
            <div
                onPointerMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setPosition({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                    });
                }}
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
                        backgroundColor: "red",
                        borderRadius: "50%",
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        left: -10,
                        top: -10,
                        width: 20,
                        height: 20,
                    }}
                />
            </div>
        </article>
    );
}
