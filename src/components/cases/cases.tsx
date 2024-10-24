import Image from 'next/image'
import { Button } from '../button/button'
import s from './cases.module.scss'
import { CaseProps } from '../../pages/cases/_/types'

export const Cases = ({ data }: { data: CaseProps[] }) => {
  return (
    <div className={s.root}>
      <h2>{`Our cases of software product development service`}</h2>
      <div className={s.items}>
        {data.map((t) => {
          return (
            <div key={t.slug} className={s.item}>
              <div className={s.image}>
                <Image src={t.home.image} alt={t.home.name} width={402} height={428} />
              </div>
              <div className={s.content}>
                <h2>{t.home.name}</h2>
                <div className={s.tags}>
                  {t.home.tags.map((tag) => {
                    return (
                      <span key={tag}>{tag}</span>
                    )
                  })}
                </div>
                <div className={s.text}>
                  {t.about}
                </div>
                <Button href={`cases/${t.slug}`}>Learn more</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}