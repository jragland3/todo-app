import { useGlobal } from "../GlobalContext"

function ToDoList() {
    const { toDoList, removeTodo, toggleTodo } = useGlobal();

    return (
        <div className='todoList' data-test="todoList">
            <h2>Todo List</h2>
            <ul>
                {toDoList.map((todo) => (
                    <li key={todo.id}>
                        <span
                          style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                          }}
                          onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button
                            className='removeItemButton'
                            onClick={() => removeTodo(todo.id)}
                            data-test="removeItemButton">
                                Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList