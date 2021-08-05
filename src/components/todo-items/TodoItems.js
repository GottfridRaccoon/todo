import React from "react"
import { Button } from "@material-ui/core"
import "./TodoItems.css"
import DeleteIcon from '@material-ui/icons/Delete';



const TodoItems = ({ text, important, onDelete }) => {

    const [state, changeState] = React.useState({
        done: false,
        important: false
    })
    const onLabelClick = () => changeState(({ done }) => {
        return {
            done: !done
        }
    })
    const onImportantClick = () => changeState(({ important }) => {
        return {
            important: !important
        }
    })
    // const toDoItemText = important ? <span style={{ color: 'red' }}  >{text}</span> : <span>{text}</span>

    let classNames = "list-items__text"
    if (state.done) {
        classNames += " done"
    } if (state.important) {
        classNames += " important"
    }
    return (
        <div className="list-items-wrapper">
            <div className={classNames} onClick={onLabelClick}>{<span>{text}</span>}</div>

            <div className="list-items__button">
                <Button variant="outlined" color="primary" onClick={onImportantClick}>
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