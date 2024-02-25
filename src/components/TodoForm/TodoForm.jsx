import { useState } from 'react'
import { Button } from '../Button/Button'

export const TodoForm = ({ onSubmit }) => {
  const [todoText, setTodoText] = useState('')

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    onSubmit(todoText)
    setTodoText('')
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mb-2 flex h-24 items-center justify-center gap-4"
    >
      <input
        className="h-8 w-full min-w-60 rounded border px-6 py-5 focus:outline-none focus:ring focus:ring-sky-300"
        type="text"
        name="text"
        placeholder="Enter task text..."
        required
        autoFocus
        value={todoText}
        onChange={(evt) => setTodoText(evt.target.value)}
      />

      <Button
        type="submit"
        className="h-10 w-full max-w-32 rounded bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700"
      >
        Add task
      </Button>
    </form>
  )
}
