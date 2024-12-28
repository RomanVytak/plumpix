import { useEffect, useState } from 'react';
import css from './stages.module.scss'
import gsap from 'gsap';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => setIsMobile(false));
    mm.add("(max-width: 768px)", () => setIsMobile(true));
    return () => {
      mm.kill();
    }
  }, [])


  if (!data) return null;

  return (
    <section className={`${css.root}`}>
      <div className="wrapper ">
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
                    >{t.tab}
                    {isMobile && <div className={`${css.arrow} mask_arrow`}></div>}
                    </button>
                    {
                      isMobile &&
                      <div className={`${css.nav_content} ${activetab === i ? css.active : ''}`}>
                        <div className={css.nav_wrapper}>
                          <div className={`${css.card}`}>
                            <h3>{t.title}</h3>
                            <p>{t.content}</p>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>
          {!isMobile && <div className={css.items_content}>
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
          </div>}
        </div>
      </div>
    </section>
  )
}
