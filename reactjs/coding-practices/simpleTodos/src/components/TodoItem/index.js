// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodoItem} = props

  const deleteTodo = () => {
    // console.log(`delete`)
    deleteTodoItem(todo.id)
  }
  return (
    <li className="todo-item">
      <p>{todo.title}</p>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  )
}

export default TodoItem
