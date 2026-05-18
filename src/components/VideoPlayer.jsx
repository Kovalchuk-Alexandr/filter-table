import { useState, useRef } from "react";

export default function VideoPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef();

	function handleClick() {
		const nextIsPlaying = !isPlaying;
		setIsPlaying(nextIsPlaying);

		if (nextIsPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
	}

    return (
        <article className="article flex-start">
			<button
				className="button-inset"
				onClick={handleClick}>
                {isPlaying ? "Pause" : "Play"}
            </button>
			<video
				width="250"
				ref={videoRef}
				autoPlay={isPlaying}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </article>
    );
}
