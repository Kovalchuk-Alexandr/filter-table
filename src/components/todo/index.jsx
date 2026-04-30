import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";

let nextId = 3;
const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

	function handleAddTodo(title) {
        setTodos([...todos, { id: nextId++, title: title, done: false }]);
        // todos.push({
        //     id: nextId++,
        //     title: title,
        //     done: false,
        // });
        // console.log("todos: ", todos);
    }

    function handleChangeTodo(nextTodo) {
        // const todo = todos.find((t) => t.id === nextTodo.id);
        // todo.title = nextTodo.title;
        // todo.done = nextTodo.done;
        // console.log("nextTodo in index handle: ", nextTodo);
        const newTodo = todos.map((todo) => {
            // console.log("todo: ", todo);
            if (todo.id === nextTodo.id) {
                // console.log("Match found");
                // return { ...todo, title: nextTodo.title };
                return { ...todo, ...nextTodo };
            } else return todo;
        });
        // console.log("newTodo in index handle: ", newTodo);
        setTodos(newTodo);
    }

	function handleDeleteTodo(todoId) {
        const nextTodo = todos.filter((t) => t.id !== todoId);
        setTodos(nextTodo);
    }

    return (
        <article className="article flex-start">
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </article>
    );
}
