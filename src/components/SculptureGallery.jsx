import { useState } from "react";
import { sculptureList } from "../data/data.js";

export default function SculptureGallery() {
    const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	let hasPrev = index > 0;
	let hasNext = index < sculptureList.length - 1;

	function handlePrevClick() {
        if (hasPrev) setIndex(index - 1);
	}

	function handleNextClick() {
        if (hasNext) setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <article className="article flex">
                <div className="button-set">
                    {hasPrev && (
                        <button
                            className="button-inset"
                            onClick={handlePrevClick}
                        >
                            Prev
                        </button>
                    )}
                    {hasNext && (
                        <button
                            className="button-inset"
                            onClick={handleNextClick}
                        >
                            Next
                        </button>
                    )}
                </div>
                <h2>
                    <i>{sculpture.name} </i>
                    by {sculpture.artist}
                </h2>
                <h3>
                    ({index + 1} of {sculptureList.length})
                </h3>
                <button className="button-inset" onClick={handleMoreClick}>
                    {showMore ? "Hide" : "Show"} details
                </button>
                {showMore && <p>{sculpture.description}</p>}
                <img src={sculpture.url} alt={sculpture.alt} />
            </article>
        </>
    );
}
