import React from "react"

const TodoItems = ({text, important = false })=>(
    important?<span style={ {color:'red'}}>{text}</span>:<span>{text}</span>
    )
    

export default TodoItems