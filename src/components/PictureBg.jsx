import { useState } from "react";

export default function Picture() {
	const [isActive, setIsActive] = useState(false);

	// Вариант через переменную className
	/**
	let backgroundClassName = "background";
    let pictureClassName = "picture";
    if (isActive) {
        pictureClassName += " picture--active";
    } else {
        backgroundClassName += " background--active";
    }
	*/
	function handleBgClick() {
		// console.log("BG clicked");
		setIsActive(false);
	}
	function handleImageClick(e) {
		e.stopPropagation();
		// console.log("Image clicked");
		setIsActive(true);
	}

	return (
		<article className="article">
			<h2>PictureBG</h2>
			<div className={`background ${!isActive && "background--active"}`} onClick={handleBgClick}>
				<img
					className={`picture ${isActive && "picture--active"}`}
					alt="Rainbow houses in Kampung Pelangi, Indonesia"
					src="https://i.imgur.com/5qwVYb1.jpeg"
					onClick={handleImageClick}
				/>
			</div>
		</article>
    );
}
