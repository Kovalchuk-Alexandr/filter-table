import { useState } from "react";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul className="person-content">
            {todos.map((todo) => (
				<li
					key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(todo.title);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <div className="list-title">
                    <input
                        className="input-inset"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            onChange({
                                ...todo,
                                title: e.target.value,
                            });
                        }}
                    />
                </div>
                <button
                    className="button-inset button-inset--small"
                    onClick={() => setIsEditing(false)}
                >
                    Save
                </button>
            </>
        );
    } else {
        todoContent = (
            <>
                <div className="list-title">{title}</div>

                <button
                    className="button-inset button-inset--small"
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>
            </>
        );
    }
    return (
        <label className="list">
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    onChange({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />
            {todoContent}
            <button
                className="button-inset button-inset--small"
                onClick={() => onDelete(todo.id)}
            >
                Delete
            </button>
        </label>
    );
}
