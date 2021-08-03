import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import AppHeader from './components/AppHeader'
import Search from './components/Search'




const Main = ()=>{

  let tasks = 
  [{
    text:"make raccoons great again", important: true
  },{
    text:"Погладить жопкина", important: true
  }, 
  {
    text:"что-то сделать", important: false
  }
]
tasks.forEach ((taskElement,taskIndex)=>taskElement.id =taskIndex+1)


  return(
    <div>

     
        <AppHeader/>
        <Search />
        <TodoList tasks = {tasks}/>
      </div>
  )
}


ReactDOM.render(<Main/>, document.getElementById("root"))


