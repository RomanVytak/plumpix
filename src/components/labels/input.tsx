import { FieldProps } from "./types"

export const Input = (props: FieldProps) => {
  const { title, error, handleChange, value, ...rest } = props

  return (
    <label data-child>
      <span>{title}</span>
      <input type="text" {...rest} onChange={handleChange} value={value} />
      {error && <span data-error>{error}</span>}
    </label>
  )
}
