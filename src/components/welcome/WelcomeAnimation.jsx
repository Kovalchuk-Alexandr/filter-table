import { useState, useEffect, useRef } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { FadeInAnimation } from "./animation.js";

function Welcome({ duration }) {
	const ref = useRef(null);

	// const onAnimation = useEffectEvent((animation) => {
	// 	console.log("Animation");
	// 	animation.start(duration);
	// });

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
		animation.start(duration);
		// onAnimation(animation);
        return () => {
            animation.stop();
        };
    }, [duration]);

    return (
        <h1
            className="message"
            ref={ref}
			style={{
				width: "90%",
                opacity: 0,
                color: "white",
                padding: 50,
                textAlign: "center",
                fontSize: 50,
                backgroundImage:
                    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            }}
        >
            Welcome
        </h1>
    );
}

export default function WelcomeAnimation() {
    const [duration, setDuration] = useState(1000);
    const [show, setShow] = useState(false);

    return (
        <article className="article flex-start">
            <label className="person-content">
                <input
                    type="range"
                    min="100"
                    max="3000"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                />
                <span>Fade in duration: {duration} ms</span>
            </label>
            <button className="button-inset" onClick={() => setShow(!show)}>
                {show ? "Remove" : "Show"}
            </button>
            <hr className="modern-line--thin"/>
            {show && <Welcome duration={duration} />}
        </article>
    );
}
