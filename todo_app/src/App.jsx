import {Header} from "./components/Header"
import {Tabs} from "./components/Tabs"
import {TodoList} from "./components/TodoList"
import {TodoInput} from "./components/TodoInput"

function App() {
  
  //We have to include some sample pre-loaded todos - these are stored in objects within an array. Where the first key-value pair is the actual todo and the second key-value pair is a status check.
  const todos = [
    {input: 'Hello! Add your first todo!', complete: true},
    {input: 'Get the groceries!', complete: true},
    {input: 'Learn web design', complete: true},
    {input: 'Fight for Middle Earth!', complete: false}
  ]

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput/>
    </>
  )
}

export default App
