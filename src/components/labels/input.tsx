
type Props = {
  title: string
  error?: string
  name: string
  placeholder?: string
  required?: boolean
}

export const Input = (props: Props) => {
  const { title, error, ...rest } = props
  return (
    <label>
      <span>{title}</span>
      <input type="text" {...rest} />
      {error && <span data-error>{error}</span>}
    </label>
  )
}
