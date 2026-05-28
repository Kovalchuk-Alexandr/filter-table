import { useState, useEffect } from "react";

export function usePointerPosition(containerRef) {
	const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
		function handleMove(e) {
			const rect = containerRef.current.getBoundingClientRect();
			// setPosition({ x: e.clientX, y: e.clientY });
			setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
        window.addEventListener("pointermove", handleMove);
        return () => window.removeEventListener("pointermove", handleMove);
    }, [containerRef]);
    return position;
}
