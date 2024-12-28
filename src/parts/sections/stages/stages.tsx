import { useState } from 'react';
import { MyLink } from '../../../components/link/link';
import css from './stages.module.scss'

type Stage = {
  tab: string;
  title: string;
  content: string;
}

type Props = {
  title: string;
  data: Stage[];
}

export const Stages = ({ title, data }: Props) => {
  const [activetab, setActivetab] = useState(0);

  if (!data) return null;

  return (
    <section className={`${css.root}`}>
      <div className="wrapper md">
        <h2>{title}</h2>
        <div className={`wrapper-grid ${css.items}`}>
          <div className={css.items_navs}>
            {
              data.map((t, i) => {
                return (
                  <div className={css.nav_row} key={t.tab}>
                    <button
                      className={`font_18 ${css.nav} ${activetab === i ? css.active : ''}`}
                      aria-label={t.tab}
                      onClick={() => setActivetab(i)}
                    >{t.tab}</button>
                  </div>
                )
              })
            }
          </div>
          <div className={css.items_content}>
            {
              data.map((t, i) => {
                return (
                  <div className={`${css.card} ${activetab === i ? css.active : ''}`} key={t.title}>
                    <h3>{t.title}</h3>
                    <p>{t.content}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
