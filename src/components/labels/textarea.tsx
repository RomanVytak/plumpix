import { FieldProps } from "./types"

export const Textarea = (props: FieldProps) => {
  const { title, error, handleChange,value, ...rest } = props
  return (
    <label data-child>
      <span>{title}</span>
      <textarea  {...rest} onChange={handleChange} rows={4} value={value} />
      {error && <span data-error>{error}</span>}
    </label>
  )
}
