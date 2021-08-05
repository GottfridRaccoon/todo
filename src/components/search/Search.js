import React from "react"
import { Button } from '@material-ui/core';
import { ButtonGroup } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";




const Search = () => {

    return (
        <div className="search-wrapper">
            <Grid container spacing={10}>
                <Grid item xs={4}>
                    <TextField id="standard-basic" label="поиск" />

                </Grid>
                <Grid item xs={3}>
                    <div className="button-wrapper">
                        <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" className="button-group">
                            <Button>Все</Button>
                            <Button>Активно</Button>
                            <Button>Выполненно</Button>
                        </ButtonGroup>

                    </div>
                </Grid>
            </Grid>
        </div>

    )
}
export default Search

