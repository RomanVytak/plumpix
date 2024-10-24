import { Button } from '../button/button'
import s from './cards.module.scss'

export const Cards = ({ title, data }: { title: string, data: any[] }) => {
  return (
    <div className={s.root}>
      <h2>{title}</h2>
      <div className={s.items}>
        {data.map((t) => {
          return (
            <div className={s.card} key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <Button href="#">{t.button}</Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
