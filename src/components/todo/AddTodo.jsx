import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("");
    return (
        <div className="button-set">
            <input
                className="input-inset"
                placeholder="Add todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                className="button-inset button-inset--small"
                onClick={() => {
                    setTitle("");
                    onAddTodo(title);
                }}
            >
                Add
            </button>
        </div>
    );
}
