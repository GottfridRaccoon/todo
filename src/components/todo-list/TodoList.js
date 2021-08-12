import React from "react"
import TodoItems from "../todo-items"
import { ListItem } from '@material-ui/core';
import { List } from "@material-ui/core";
import "./TodoList.css"
import Box from '@material-ui/core/Box';


const TodoList = ({ tasks, onDelete, toggleImportant, toggleDone }) => {







    const elements = tasks.map((taskElement) => {
        const { id, ...tasksProp } = taskElement
        return (

            <Box key={id} borderRadius={4} border={1} borderColor="grey.500" className="todo-list-item" >
                <ListItem >
                    <TodoItems {...tasksProp} onDelete={() => onDelete(id)} toggleImportant={() => toggleImportant(id)} toggleDone={() => toggleDone(id)} tasks={tasks} />
                </ListItem>
            </Box >
        )
    })


    return (

        <List >
            {elements}
        </List>

    )
}
export default TodoList