import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import { Layout } from './Layout/Layout'
import { AppBar } from './AppBar/AppBar'
import { TodoForm } from './TodoForm/TodoForm'
import { Todo } from './Todo/Todo'

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos))
      } catch (error) {
        console.error('Error parsing JSON:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (todoText: string) => {
    setTodos((prev) => [
      ...prev,
      { id: nanoid(), text: todoText, completed: false }
    ])
  }

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  /* to change the text of the todo */
  const handleEdit = (todoNew: TodoItem) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoNew.id ? { ...todo, text: todoNew.text } : todo
      )
    )
  }

  return (
    <Layout>
      <AppBar></AppBar>

      <h2 className="text-2xl font-bold">TO DO</h2>

      <TodoForm onSubmit={handleSubmit} />

      <ul className="">
        {todos.map((todo, index) => (
          <li className="" key={todo.id}>
            <Todo
              index={index + 1}
              id={todo.id}
              todoText={todo.text}
              todoCompleted={todo.completed}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default App
