import { useState } from "react";

export default function SyncedInputs() {
	const [text, setText] = useState("");

	function handleChange(value) {
		// console.log("value: ", value);
        setText(value);
    }

    return (
        <article className="article ">
            <Input label="First input" onChange={handleChange} text={text} />
            <Input label="Second input" onChange={handleChange} text={text} />
        </article>
    );
}

function Input({ label, text, onChange }) {
	//Переносим управление состоянием из локального в родитель
    // const [text, setText] = useState("");

	// function handleChange(e) {
	// 	console.log("value: ", e.target.value);
    // setText(e.target.value);
    // }

    return (
        <label className="grid">
            {label}{" "}
            <input
                className="input-inset"
                value={text}
                onChange={(e) => onChange(e.target.value)}
            />
            <button
                className="button-inset button-inset--small"
                onClick={() => onChange("")}
            >
                Clear
            </button>
        </label>
    );
}
