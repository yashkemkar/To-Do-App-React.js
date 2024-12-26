import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos } = props

    const tab = 'All'
    const filterTodosList =
        tab === 'All' ? todos : //If 'All', present all todos or...
            tab === 'Complete' ? todos.filter(val => val.complete) : //if 'complete', present completed todos
                todos.filter(val => !val.complete) //if not 'complete' present open tasks.
    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                    key={todoIndex} 
                    todoIndex={todoIndex} 
                    todo={todo} />
                )
            })}

        </>
    )
}