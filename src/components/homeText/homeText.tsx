import { Button } from "../button/button"
import s from './homeText.module.scss'

const progress = [
  {
    value: '100%',
    text: 'positive feedback',
  },
  {
    value: '30+',
    text: 'finished projects',
  },
  {
    value: '10+',
    text: 'clients worldwide',
  },
]

export const HomeText = () => {
  return (
    <div className={s.root}>
      <h1>{`Transform your business with solution-driven teams`}</h1>
      <p>{`Comprehensive end-to-end software engineering covering prototyping, deployment, scaling, and ongoing support.`}</p>
      <Button href="#" type="big">{`Start with a free consultation`}</Button>
      <div className={s.progress}>
        {progress.map((t) => {
          return (
            <div key={t.value}>
              <p className={s.value}>{t.value}</p>
              <p className={s.text}>{t.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}