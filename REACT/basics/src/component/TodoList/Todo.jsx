import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])
    const changeHandler = () => {
        let data = [...todo, task]
        setTodo(data)
        setTask('')
    }
    const DeleteHandler =(index)=>{
        const todoData=[...todo]
        todoData.splice(index,1)
        setTodo(todoData)
    }
    return (
        <div>
            <h1>ToDo List</h1>
            <div className="container">
                <input type="text" placeholder='Enter TODOS' value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={changeHandler}>ADD TODOS</button>
            </div>
            <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    todo.map((item, i) =>
                        <>
                            <li key={i}>{item}</li>
                            <button style={{display:'block',width:'120px'}} onClick={()=>DeleteHandler(i)}>Delete</button>
                        </>

                    )
                }
            </div>
        </div>
    )
}

export default Todo
