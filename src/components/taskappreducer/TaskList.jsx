import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul className="">
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input className="task-input input-inset"
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
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
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            <div className="grid-25ch-2fr">
                {taskContent}
                <button
                    className="button-inset button-inset--middle"
                    onClick={() => onDelete(task.id)}
                >
                    Delete
                </button>
            </div>
        </label>
    );
}
