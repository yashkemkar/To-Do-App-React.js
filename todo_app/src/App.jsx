import {Header} from "./components/Header"
import {Tabs} from "./components/Tabs"
import {TodoList} from "./components/TodoList"
import {TodoInput} from "./components/TodoInput"

import {useState} from 'react'

function App() {
  
  //We have to include some sample pre-loaded todos - these are stored in objects within an array. Where the first key-value pair is the actual todo and the second key-value pair is a status check.
  // const todos = [
  //   {input: 'Hello! Add your first todo!', complete: true},
  //   {input: 'Get the groceries!', complete: true},
  //   {input: 'Learn react', complete: true},
  //   {input: 'Fight for Middle Earth!', complete: false}
  // ]

  const [todos, setTodos] = useState([{input: 'Hello! Add your first todo!', complete: true}])

  const [selectedTab,setSelectedTab] = useState('Open')

  // create an add function
  function handleAddTodo (newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete:false}] // creates a completely new list, spreads the original array, adds the new todo onto it as an object with the complete key set to false.
    setTodos(newTodoList) //We have now updated the original list and deleted it.
  }

  function handleEditTodo (index){
    //update/edit/modify
    let newTodoList = []
  }

  function handleDeleteTodo (index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos = newTodoList
  }

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} handleDeleteTodo={handleDeleteTodo}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
