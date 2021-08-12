import React from "react"
const AppHeader = ({ done, need }) => {
    return (<div><h1>Список дел</h1>
        <p>Выполненых {done} осталось {need} </p>
    </div>)
}
export default AppHeader