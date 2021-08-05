import React from 'react'

import TodoList from '../todo-list'
import AppHeader from '../app-header'
import Search from '../search'
import "@fontsource/roboto";
import './Main.css'
import { Container } from '@material-ui/core';



const Main = () => {

  let [tasks, changeTask] = React.useState({
    tasksData: [{
      text: "make raccoons great again", important: true, id: 1
    }, {
      text: "Погладить жопкина", important: true, id: 2
    },
    {
      text: "что-то сделать", important: false, id: 3
    }
    ]
  })


  const deleteItem = (id) => {
    changeTask(({ tasksData }) => {
      const indexElement = tasksData.findIndex(e => e.id === id)
      const deletedTask = [...tasksData.slice(0, indexElement), ...tasksData.slice(indexElement + 1)]
      return {
        tasksData: deletedTask
      }
    }
    )


  }



  return (
    <div className="root-wrapper">

      <Container maxWidth='sm' >
        <AppHeader />
        <Search />
        <TodoList tasks={tasks} onDelete={deleteItem} />
      </Container>
    </div>
  )
}
export default Main