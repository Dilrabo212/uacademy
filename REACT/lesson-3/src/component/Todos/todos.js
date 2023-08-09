import style from "./style.module.css"
import { Todos } from "../Todos/todos";


export const Todos = ({ todos, handleTodoChange, handleDelete }) => {
    return <li>
        <label htmlFor={todos.id}>{todos.title}</label>
        <input onChange={(e) => handleTodoChange(e, todos)} defaultChecked={todos.cheked} type="checkbox" id={todos.id} />
        <button onClick={() => handleDelete(todos.id)}>X</button>
    </li>

}