export function TodoCard(props) {
    const { todo } = props //destructure the todos so we can use it in other
    console.log(todo)
    return (
        <div className = "card todo-item">
            <p>{todo.input}</p>
            <div className = "todo-buttons">
                <button disabled={todo.complete}> 
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}