import { useState } from 'react'
import { MdClose } from 'react-icons/md'

export const Todo = ({
  index,
  id,
  todoText,
  todoCompleted,
  handleDelete,
  handleToggle,
  handleEdit
}) => {
  const [newTodoText, setNewTodoText] = useState(todoText)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="">
      <p>TODO {index}</p>

      <input
        type="checkbox"
        className=""
        checked={todoCompleted}
        onChange={() => handleToggle(id)}
      />

      {/* <p className="">{todoText}</p> */}

      {/* to change the text of the todo */}
      {isEdit ? (
        <input
          onBlur={() => {
            setIsEdit(false)
            handleEdit({ id, text: newTodoText })
          }}
          autoFocus
          value={newTodoText}
          onChange={(evt) => setNewTodoText(evt.target.value)}
        />
      ) : (
        <p className="" onClick={() => setIsEdit(true)}>
          {todoText}
        </p>
      )}

      <button className="" type="button" onClick={() => handleDelete(id)}>
        <MdClose size={24} />
      </button>
    </div>
  )
}
