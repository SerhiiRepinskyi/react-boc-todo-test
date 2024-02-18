import { MdClose } from 'react-icons/md'

export const Todo = ({
  index,
  id,
  todoText,
  todoCompleted,
  handleDelete,
  handleToggle
}) => {
  return (
    <div className="">
      <p>TODO {index}</p>

      <input
        type="checkbox"
        className=""
        checked={todoCompleted}
        onChange={() => handleToggle(id)}
      />

      <p className="">{todoText}</p>

      <button className="" type="button" onClick={() => handleDelete(id)}>
        <MdClose size={24} />
      </button>
    </div>
  )
}
