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
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    className="input-inset"
                    value={todo.title}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />
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
                {todo.title}
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
