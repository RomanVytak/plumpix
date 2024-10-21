import { Button } from '../button/button'
import s from './cards.module.scss'

export const Cards = ({ data }: { data: any[] }) => {
  return (
    <div className={s.root}>
      {data.map((t) => {
        return (
          <div className={s.card}>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
            <Button href="#">{t.button}</Button>
          </div>
        )
      })}
    </div>
  )
}
