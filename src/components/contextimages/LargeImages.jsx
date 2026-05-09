import { useState } from "react";
import { places } from "./data.js";
import { getImageUrl } from "./utils.js";
import { useContext } from "react";
import { PictureContext } from "./Context.js";

export default function LargeImages() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <article className="article">
			<PictureContext value={imageSize}>
				<label className="label-item label-item--nerrow">
					<input
						type="checkbox"
						checked={isLarge}
						onChange={(e) => {
							setIsLarge(e.target.checked);
						}}
					/>
					Use large images
				</label>
				<hr className="modern-line" />
				<List />
			</PictureContext>
        </article>
    );
}

function List() {
    const listItems = places.map((place) => (
        <li key={place.id}>
            <Place place={place} />
        </li>
    ));
	return (
		<ul>{listItems}</ul>
	);
}

function Place({ place }) {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                <b>{place.name + ": "}</b>
                <br />
                {place.description}
            </p>
        </>
    );
}

function PlaceImage({ place }) {
	const imageSize = useContext(PictureContext);
    // console.log("imgSize: ", imageSize);
	return (
        <img
            className="image"
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}
