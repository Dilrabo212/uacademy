
import { useEffect, useState } from "react";
import style from "./style.module.css"
import { Todos } from "../Todos/todos";
const BASE_URL = "https://64d0ea9fff953154bb79b548.mockapi.io"

export const Todo = () => {

    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/todo`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])
    const handleDelete = (id) => {
        fetch(`${BASE_URL}/todo/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                fetch(`${BASE_URL}/todo`)
                    .then(res => res.json())
                    .then(data => setTodo(data))
            })
    }
    const handleTodoChange = (e, todos) => {
        console.log(e.target.cheked)
        fetch(`${BASE_URL}/todo/${todos.id}`, {
            method: "PUT",
            body: JSON.stringify({
                createdAt: todos.createdAt,
                title: todos.title,
                checked: e.target.cheked,
                id: todos.id,
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })

    }

}
return (
    < >

        <div class={style.container}>
            <h1 className={style.title}>To Do list </h1>

            <div className={style.body}>
                <form className={style.forma}>
                    <input className={style.input} type="text" placeholder="input text" required />
                    <button class={style.submit}>Add</button>
                </form>
                <ul class={style.list}>
                    {
                        todo.map(todos => <Todos
                            key={todos.id}
                            todos={todos}
                            handleDelete={handleDelete}
                            handleTodoChange={handleTodoChange}
                        />)
                    }
                </ul>
                <button class={style.btn}>Clear all</button>
            </div>
        </div>
    </>



);


export default Todo










