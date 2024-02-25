import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import { Layout } from './Layout/Layout'
import { Header } from './Header/Header'
import { AppBar } from './AppBar/AppBar'
import { TodoForm } from './TodoForm/TodoForm'
import { Todo } from './Todo/Todo'

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

export const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])

  useEffect(() => {
    const currentTodos = localStorage.getItem('todos')
    if (currentTodos) {
      try {
        setTodos(JSON.parse(currentTodos))
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
      prev.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    )
  }

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  /* to change the text of the todo */
  const handleEdit = (todoNew: TodoItem) => {
    setTodos((prev) =>
      prev.map((el) =>
        el.id === todoNew.id ? { ...el, text: todoNew.text } : el
      )
    )
  }

  return (
    <>
      <Header />
      <Layout>
        <AppBar />
        <TodoForm onSubmit={handleSubmit} />
        <ul className="m-0">
          {todos.map((el, index) => (
            <li
              key={el.id}
              className="flex flex-row items-center justify-between border-b border-gray-300 py-4"
            >
              <Todo
                index={index + 1}
                id={el.id}
                todoText={el.text}
                todoCompleted={el.completed}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}
