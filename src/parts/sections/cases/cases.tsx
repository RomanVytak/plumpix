import Image from 'next/image'
import s from './cases.module.scss'
import { Tags } from '../../../components/tags/tags'
import { MyLink } from '../../../components/link/link'
import { CaseProps } from '../../../types'
import Link from 'next/link'

export const Cases = ({ data, title }: { data: CaseProps[], title?: string }) => {
  return (
    <section className={s.root}>
      <div className={`wrapper ${s.wrapper}`}>
        {title && <h2 data-fade dangerouslySetInnerHTML={{ __html: title }} />}
        <div className={s.items}>
          {data.map((t) => {
            return (
              <div key={t.slug} className={s.item} data-fade>
                <div className={s.image}>
                  <Link href={`cases/${t.slug}`}>
                    <Image src={t.home.preview} alt={t.home.name} width={402} height={428} />
                  </Link>
                </div>
                <div className={s.content}>
                  <p className={`${s.name} font_36`}>
                    <Link href={`cases/${t.slug}`}>
                      {t.home.name}
                    </Link>
                  </p>
                  <div className={s.tags}>
                    <Tags tags={t.home.tags} />
                  </div>
                  <p className={s.text}>
                    {t.preview}
                  </p>
                  <div className={s.button}>
                    <MyLink href={`cases/${t.slug}`} title='Learn more' icon={true} type='stroke'>{`Learn more`}</MyLink>
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