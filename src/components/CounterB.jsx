import { useState } from "react";

export default function CounterB() {
    const [showB, setShowB] = useState(true);
    return (
		<article className="article person-content">
			<div className="wrapper">
				<Counter />
				{showB && <Counter />}
			</div>
            <label className="label-item">
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={(e) => {
                        setShowB(e.target.checked);
                    }}
                />
                Render the second counter
            </label>
        </article>
    );
}

function Counter() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if (hover) {
        className += " hover";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1><b>{score}</b></h1>
            <button
                className="button-inset button-inset--small"
                onClick={() => setScore(score + 1)}
            >
                Add one
            </button>
        </div>
    );
}
