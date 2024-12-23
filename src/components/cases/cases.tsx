import Image from 'next/image'
import { Button } from '../button/button'
import s from './cases.module.scss'
import { CaseProps } from '../../pages/cases/_/types'
import { Tags } from '../tags/tags'

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
                  <Tags tags={t.home.tags} />
                </div>
                <p className={s.text}>
                  {t.about}
                </p>
                <div className={s.button}>
                  <Button href={`cases/${t.slug}`}>{`Learn more`}</Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}