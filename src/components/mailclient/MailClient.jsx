import { useState } from "react";
import { initialLetters } from "./data.js";
import Letter from "./Letter.jsx";

export default function MailClient() {
	const [letters, setLetters] = useState(initialLetters);
    // const [selectedId, setSelectedId] = useState(null);

    // TODO: allow multiple selection
	const selectedCount = letters.filter(l => l.selected).length;
	let letterWord = selectedCount > 1 ? "letters" : "letter";

	function handleToggle(nextLetters) {
		// console.log("nextLetters: ", nextLetters);
        // TODO: allow multiple selection
		// setSelectedId(toggledId);
		const newLetters = letters.map((letter) => {
            if (letter.id === nextLetters.id) {
                // console.log("Match found");
                return { ...nextLetters };
            } else return letter;
        });
        // console.log("newLetters: ", newLetters);
        setLetters(newLetters);
    }

    return (
        <article className="article">
            <h2>Inbox</h2>
            <ul className="person-content">
                {letters.map((letter) => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        // isSelected={
                        //     // TODO: allow multiple selection
                        //     letter.id === selectedId
                        // }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>You selected {selectedCount} {letterWord}</b>
                </p>
            </ul>
        </article>
    );
}
