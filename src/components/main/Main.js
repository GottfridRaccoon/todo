import React from 'react'

import TodoList from '../todo-list'
import AppHeader from '../app-header'
import Search from '../search'
import "@fontsource/roboto";
import './Main.css'
import { Container } from '@material-ui/core';
import AddPanel from '../add-panel';
let inc = 1

const Main = () => {

  const newTask = (text) => {
    return {
      text,
      important: false,
      id: ++inc,
      done: false
    }

  }

  let [tasks, changeTask] = React.useState({
    tasksData: [
      newTask("make raccoons great again"),
      newTask("что-то сделать")
    ],

  })
  let [searchField, chSearch] = React.useState({
    search: '',

  })
  let [filter, filterChange] = React.useState({ filterData: '' })




  const idx = (id, arr) => arr.findIndex(e => e.id === id)
  const deleteItem = (id) => {
    changeTask(({ tasksData }) => {
      const indexElement = idx(id, tasksData)
      const deletedTask = [...tasksData.slice(0, indexElement), ...tasksData.slice(indexElement + 1)]
      return {
        tasksData: deletedTask
      }
    }
    )
  }

  const tasksProp = (arr, id, propName) => {
    const indexElement = idx(id, arr)
    const oldItem = arr[indexElement]
    const doneTask = { ...oldItem, [propName]: !oldItem[propName] }
    return [...arr.slice(0, indexElement), doneTask, ...arr.slice(indexElement + 1)]

  }

  const toggleImportant = (id) => {
    changeTask(({ tasksData }) => {
      return { tasksData: tasksProp(tasksData, id, 'important') }
    })


  }
  const toggleDone = (id) => {
    changeTask(({ tasksData }) => {
      return { tasksData: tasksProp(tasksData, id, 'done') }


    })

  }

  const createItem = (e) => {

    const newItem = newTask(e)

    changeTask(({ tasksData }) => {
      ///тут был изменютаск
      const addElement = [...tasksData, newItem]
      return {
        tasksData: addElement
      }
    }
    )
  }

  function taskSearch(el, arr) {

    if (el.length === 0) {
      return arr
    }
    return arr.filter((e) => e.text.indexOf(el) > -1)

  }
  const searchChange = (el) => {
    chSearch({ search: el })
  }
  let taskFilterChange = (filter) => filterChange({ filterData: filter })





  const taskFilter = (items, filter) => {


    switch (filter) {
      case 'all':
        return items
      case 'done':
        return items.filter(el => el.done === true)
      case "active":
        return items.filter(el => el.done === false)
      default:
        return items
    }

  }
  let visibleItems = taskFilter(taskSearch(searchField.search, tasks.tasksData), filter.filterData)
  let doneCount = tasks.tasksData.filter(e => e.done).length
  let needCount = tasks.tasksData.length - doneCount
  return (
    <div className="root-wrapper">

      <Container maxWidth='sm' >
        <AppHeader done={doneCount} need={needCount} />
        <Search searchChange={searchChange}
          taskFilterChange={taskFilterChange} />
        <TodoList

          onDelete={deleteItem}
          toggleImportant={toggleImportant}
          toggleDone={toggleDone}
          tasks={visibleItems}

        />
        <AddPanel createItem={createItem} />
      </Container>

    </div>
  )
}
export default Main