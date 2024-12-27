
type Props = {
  title: string
  error?: string
  name: string
  placeholder?: string
}

export const Textarea = (props: Props) => {
  const { title, error, ...rest } = props
  return (
    <label>
      <span>{title}</span>
      <textarea  {...rest} rows={5} />
      {error && <span data-error>{error}</span>}
    </label>
  )
}
