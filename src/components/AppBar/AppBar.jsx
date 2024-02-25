export const AppBar = () => {
  return (
    <div className="mb-2 flex h-24 flex-col justify-center gap-1">
      <h2 className="font-bold">Tasks</h2>
      <div className="flex flex-col">
        <p>Active: 0</p>
        <p>Completed: 0</p>
      </div>
    </div>
  )
}
