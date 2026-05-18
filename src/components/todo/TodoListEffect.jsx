import { useState, useEffect, useMemo } from "react";
import { initialTodos, createTodo, getVisibleTodos } from "./todos.js";

export default function TodoListEffect() {
    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    // const [activeTodos, setActiveTodos] = useState([]);
    // const [visibleTodos, setVisibleTodos] = useState([]);
    // const [footer, setFooter] = useState(null);

	// Фильтрация вынесена в функцию getVisibleTodos, которая вызывается внутри useMemo. Это позволяет избежать лишних вычислений при каждом рендере, так как getVisibleTodos будет вызываться только тогда, когда изменятся todos или showActive.
	const activeTodos = todos.filter((todo) => !todo.completed);
	// const visibleTodos = showActive ? activeTodos : todos;
	const visibleTodos = useMemo(
        () => getVisibleTodos(todos, showActive, activeTodos),
        [todos, showActive, activeTodos],
    );
	// console.log("ActiveTodos: ", activeTodos);
		// useEffect(() => {
		//     setActiveTodos(todos.filter((todo) => !todo.completed));
		// }, [todos]);

    // useEffect(() => {
    //     setVisibleTodos(showActive ? activeTodos : todos);
    // }, [showActive, todos, activeTodos]);

    // useEffect(() => {
    //     setFooter(<footer>{activeTodos.length} todos left</footer>);
    // }, [activeTodos]);

    return (
        <article className="article flex-start">
            <label className="label-item label-item--nerrow">
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={(e) => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            {/* <hr class="modern-line"></hr> */}
            <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
            <ul>
                {visibleTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            {/* {footer} */}
            <footer>{activeTodos.length} todos left</footer>
        </article>
    );
}

function NewTodo({ onAdd }) {
    const [text, setText] = useState("");

    function handleAddClick() {
        setText("");
        onAdd(createTodo(text));
    }

    return (
        <div className="button-set">
            <input
                className="input-inset"
                placeholder="Add todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="button-inset button-inset--small"
                onClick={handleAddClick}
            >
                Add
            </button>
        </div>
    );
}
