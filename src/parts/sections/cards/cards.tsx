import { MyLink } from '../../../components/link/link';
import s from './cards.module.scss'

export const Cards = ({ title, data }: { title: string, data: any[] }) => {
  if (!data) {
    return null;
  }

  return (
    <section className={s.root}>
      <div className="wrapper">
        <h2>{title}</h2>
        <div className={s.items}>
          {data.map((t) => {
            return (
              <div className={s.card} key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                {t.link && <MyLink href={t.link} icon={true} type='stroke' size='medium' title={t.button}>{t.button}</MyLink>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
