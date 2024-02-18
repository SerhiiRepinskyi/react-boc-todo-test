import { Todo } from '../Todo/Todo'

const handleDelete = (id) => {
  setTodos((prev) => prev.filter((el) => el.id !== id))
}

export const TodoList = ({ todos }) => {
  return (
    <ul className="">
      {todos.map((todo) => (
        <li className="" key={todo.id}>
          <Todo
            id={todo.id}
            todoText={todo.text}
            todoCompleted={todo.completed}
            handleDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  )
}
