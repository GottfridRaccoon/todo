import React from "react"
import { Button } from '@material-ui/core';
import { ButtonGroup } from "@material-ui/core";

import { TextField } from "@material-ui/core";
import './Search.css'



const Search = ({ searchChange, taskFilterChange }) => {
    const [textField, textChange] = React.useState({
        text: ""
    })
    const onTextChange = (e) => {
        let text = e.target.value
        textChange({ text })
        searchChange(text)


    }
    const showActive = () => taskFilterChange("active")
    const showDone = () => taskFilterChange("done")
    const showAll = () => taskFilterChange("all")

    return (
        <div className="search-wrapper">


            <TextField id="standard-basic" label="поиск" onChange={onTextChange} value={textField.text} />


            <div className="button-wrapper">
                <ButtonGroup color="default" size="small" aria-label="outlined secondary button group">
                    <Button onClick={showAll}>Все</Button>
                    <Button onClick={showActive}  >Активно</Button>
                    <Button onClick={showDone}>Выполнено</Button>
                </ButtonGroup>

            </div>

        </div>

    )
}
export default Search

