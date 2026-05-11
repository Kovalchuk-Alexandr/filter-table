import { useContext, useState } from "react";
import { useTasksDispatch } from "./TasksContext";

export default function AddTask() {
	const [text, setText] = useState("");
	const dispatch = useTasksDispatch();
	// const dispatch = useContext(TasksDispatchContext);
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
					dispatch({
						type: 'added',
						id: nextId++,
						text: text,
					});
                }}
            >
                Add
            </button>
        </div>
    );
}

let nextId = 3;
