import { useState } from "react";

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState("");
    return (
        <div className="button-set">
            <input
                className="input-inset"
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="button-inset button-inset--small"
                onClick={() => {
                    setText("");
                    onAddTask(text);
                }}
            >
                Add
            </button>
        </div>
    );
}
