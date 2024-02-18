export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button className="" selected={selected} type={type} {...otherProps}>
      {children}
    </button>
  )
}
