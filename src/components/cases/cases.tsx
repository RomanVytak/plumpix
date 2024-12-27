import Image from 'next/image'
import s from './cases.module.scss'
import { CaseProps } from '../../pages/cases/_/types'
import { Tags } from '../tags/tags'
import { MyLink } from '../link/link'

export const Cases = ({ data, title }: { data: CaseProps[], title?: string }) => {
  return (
    <section className={s.root}>
      <div className={`wrapper ${s.wrapper}`}>
        {title && <h2>{title}</h2>}
        <div className={s.items}>
          {data.map((t) => {
            return (
              <div key={t.slug} className={s.item}>
                <div className={s.image}>
                  <Image src={t.home.image} alt={t.home.name} width={402} height={428} />
                </div>
                <div className={s.content}>
                  <p className='font_36'>{t.home.name}</p>
                  <div className={s.tags}>
                    <Tags tags={t.home.tags} />
                  </div>
                  <p className={s.text}>
                    {t.about}
                  </p>
                  <div className={s.button}>
                    <MyLink href={`cases/${t.slug}`} title='Learn more' icon={true} type='stroke'>Learn more</MyLink>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}