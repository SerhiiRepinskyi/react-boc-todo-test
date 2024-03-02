export const AppBar = ({ todos }) => {
  const count = todos.reduce(
    (acc, todo) => {
      if (todo.completed) {
        acc.completed += 1
      } else {
        acc.active += 1
      }
      return acc
    },
    { active: 0, completed: 0 }
  )

  return (
    <div className="mb-2 flex h-24 flex-col justify-center gap-1">
      <h2 className="font-bold">Tasks</h2>
      <div className="flex flex-col">
        <p>
          Active:{' '}
          <span className="bg-gray-300 px-1.5 py-px">{count.active}</span>
        </p>
        <p>
          Completed:{' '}
          <span className="bg-gray-300 px-1.5 py-px">{count.completed}</span>
        </p>
      </div>
    </div>
  )
}
