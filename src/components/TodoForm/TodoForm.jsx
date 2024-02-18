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
    <form onSubmit={handleFormSubmit}>
      <input
        className=""
        type="text"
        name="text"
        placeholder="Enter task text..."
        required
        autoFocus
        value={todoText}
        onChange={(evt) => setTodoText(evt.target.value)}
      />

      <Button type="submit">Add task</Button>
    </form>
  )
}
