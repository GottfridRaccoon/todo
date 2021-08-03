import React from "react"
import  TodoItems from "./TodoItems"
const TodoList = ({tasks})=>{
 

    const elements = (
        tasks.map((taskElement ) =>{
            const  {id, ...tasksProp} = taskElement
            return <li key = {id}><TodoItems {...tasksProp} /> </li>
    })
)

    return(
        <ul>
            {elements}
        </ul>
    )
}
export default TodoList