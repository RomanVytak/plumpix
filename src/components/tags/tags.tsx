import s from './tags.module.scss'

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className={s.root}>
      {tags.map((t) => {
        return (
          <span key={t}>{t}</span>
        )
      })}
    </div>
  )
}
