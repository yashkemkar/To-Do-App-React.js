import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, handleDeleteTodo, selectedTab } = props

    const filterTodosList =
    selectedTab === 'All' ? todos : //If 'All', present all todos or...
        selectedTab === 'Complete' ? todos.filter(val => val.complete) : //if 'complete', present completed todos
                todos.filter(val => !val.complete) //if not 'complete' present open tasks.
    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                        key={todoIndex} 
                        {...props}
                        todo={todo} />
                )
            })}

        </>
    )
}