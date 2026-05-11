import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { TasksProvider } from "./TasksContext.jsx";
// import { useReducer } from "react";
// import tasksReducer from "./tasksReducer.js";
// import { TasksContext, TasksDispatchContext } from "./Taskccontext.js";

export default function TaskAppReducerContext() {
    // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    // function handleAddTask(text) {
    //     dispatch({
    //         type: "added",
    //         id: nextId++,
    //         text: text,
    //     });
    // }

    // function handleChangeTask(task) {
    //     dispatch({
    //         type: "changed",
    //         task: task,
    //     });
    // }

    // function handleDeleteTask(taskId) {
    //     dispatch({
    //         type: "deleted",
    //         id: taskId,
    //     });
    // }

    return (
		<article className="article flex-start">
			<TasksProvider>
			{/* <TasksContext.Provider value={tasks}>
				<TasksDispatchContext.Provider value={dispatch}> */}
					<h1>Day off in Kyoto</h1>
					<AddTask  />
					<TaskList/>
				{/* </TasksDispatchContext.Provider>
			</TasksContext.Provider> */}
			</TasksProvider>
        </article>
    );
}

/* Перемещены в TasksContext.jsx
const initialTasks = [
    { id: 0, text: "Philosopher’s Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false },
];
*/
