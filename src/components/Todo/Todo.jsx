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
    <>
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="size-6 cursor-pointer"
          checked={todoCompleted}
          onChange={() => handleToggle(id)}
        />

        <p>{index}</p>

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
          <p onClick={() => setIsEdit(true)}>{todoText}</p>
        )}
      </div>

      <button
        className="hover:bg-gray-300"
        type="button"
        onClick={() => handleDelete(id)}
      >
        <MdClose size={24} color="#f44336" />
      </button>
    </>
  )
}
