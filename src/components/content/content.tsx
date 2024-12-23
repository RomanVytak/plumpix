import s from './content.module.scss'

export const Content = ({ data, title }: { data: string, title?: string }) => {
  return (
    <div className={s.root}>
      {title && <h2>{title}</h2>}
      <div
        className={s.content}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  )
}
