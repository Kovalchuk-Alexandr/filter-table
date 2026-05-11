import { useState, useContext } from "react";
import { useTasks, useTasksDispatch } from "./TasksContext.jsx";

export default function TaskList() {
	// const tasks = useContext(TasksContext);
	const tasks = useTasks();
    return (
        <ul className="">
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task}/>
                </li>
            ))}
        </ul>
    );
}

function Task({ task }) {
	const [isEditing, setIsEditing] = useState(false);
	// const dispatch = useContext(TasksDispatchContext);
	const dispatch = useTasksDispatch();
	let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input className="task-input input-inset"
                    value={task.text}
                    onChange={(e) => {
						dispatch({
							type: 'changed',
							task: {
								...task,
								text: e.target.value,
							}
                        });
                    }}
                />
                <button
                    className="button-inset button-inset--middle"
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
			<>
				<span className="task-input">
                	{task.text}
				</span>
                <button
                    className="button-inset button-inset--middle"
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
            </>
        );
    }
    return (
        <label className="label-item label-item--nerrow">
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    dispatch({
                        type: "changed",
                        task: {
                            ...task,
                            done: e.target.checked,
                        },
                    });
                }}
            />
            <div className="grid-25ch-2fr">
                {taskContent}
                <button
                    className="button-inset button-inset--middle"
					onClick={() => {
						dispatch({
							type: "deleted",
							id: task.id
						});
					}}
                >
                    Delete
                </button>
            </div>
        </label>
    );
}
