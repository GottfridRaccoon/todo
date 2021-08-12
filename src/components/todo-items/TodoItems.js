import React from "react"
import { Button } from "@material-ui/core"
import "./TodoItems.css"
import DeleteIcon from '@material-ui/icons/Delete';



const TodoItems = ({ text, important, done, onDelete,
    toggleImportant, toggleDone, search}) => {


  
    let classNames = "list-items__text"
    if (done) {
        classNames += " done"
    } if (important) {
        classNames += " important"
    }
    return (
        <div className="list-items-wrapper">
            <div className={classNames} onClick={toggleDone}>{<span>{text}</span>}</div>

            <div className="list-items__button">
                <Button variant="outlined" color="primary" onClick={toggleImportant} >
                    <b>!</b>
                </Button >
                <Button variant="outlined" color="secondary" onClick={onDelete}>
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    )
}


export default TodoItems