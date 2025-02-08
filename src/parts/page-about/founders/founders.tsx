import Image from "next/image"
import css from './founders.module.scss'

const temp = [
  {
    name: 'Roman',
    image: '/img/cases/case.jpg',
    position: 'CEO',
    linkedin: '#',
  },
  {
    name: 'Olena',
    image: '/img/cases/case.jpg',
    position: 'CEO',
    linkedin: '#',
  }
]

export const Founders = () => {
  return (
    <section className={css.root}>
      <div className={`wrapper md ${css.wrapper}`}>
        <div className={`wrapper-grid`} data-fade data-children>
          <h2 dangerouslySetInnerHTML={{ __html: 'Meet Brains<br>Behind the Brand' }} />
          {temp.map((t) => {
            return (
              <div key={t.name} className={css.item}>
                <div className={css.ceo}>
                  <a href='/' target='_blank' className={`${css.link} font_18`}>
                    <img src="/socials/linkedin.svg" alt={t.name} />
                    {t.name}
                  </a>
                  <p>{t.position}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}