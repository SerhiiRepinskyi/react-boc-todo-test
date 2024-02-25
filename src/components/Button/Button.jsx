export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button selected={selected} type={type} {...otherProps}>
      {children}
    </button>
  )
}
