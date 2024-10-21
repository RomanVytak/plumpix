import Image from 'next/image'
import { Button } from '../button/button'
import s from './cases.module.scss'

export const Cases = ({ data }) => {
  return (
    <div className={s.root}>
      <h2>{`Our cases of software product development service`}</h2>
      <div className={s.items}>
        {data.map((t) => {
          return (
            <div key={t.name} className={s.item}>
              <div className={s.image}>
                <Image src={t.image} alt={t.name} width={402} height={428} />
              </div>
              <div className={s.content}>
                <h2>{t.name}</h2>
                <div className={s.tags}>
                  {t.tags.map((tag) => {
                    return (
                      <span key={tag}>{tag}</span>
                    )
                  })}
                </div>
                <div className={s.text}>
                  {t.text}
                </div>
                <Button href={t.link}>Learn more</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}