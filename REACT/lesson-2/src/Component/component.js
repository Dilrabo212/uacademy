import { useState } from "react"

export const User = () => {
    const [input, setInput] = useState()
    const [user, setUser] = useState([
        {
            name: "G'ayrat",
            id: 1,
        },
        {
            name: "George",
            id: 2,
        },
        // {
        //     name: value,
        //     id: user.length + 1
        // }
    ])



    const addUser = () => {
        const newUser= {
            name:
        }
        console.log(input);
    }
    const inputOnchange = (e) => {
        console.log(e.target.value);
        setInput(e.target.value)
    }

    return <>

        <input onChange={inputOnchange} type="text" placeholder="edded" />
        <button onClick={addUser}></button>



    </>

}