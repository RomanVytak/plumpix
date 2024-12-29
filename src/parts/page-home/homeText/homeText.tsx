import { MyLink } from '../../../components/link/link'
import css from './homeText.module.scss'

const data = {
  title: 'Transform your business with solution-driven teams',
  text: 'Comprehensive end-to-end software engineering covering prototyping, deployment, scaling, and ongoing support.',
  button: 'Start with a free consultation',
  link: '#',
}

const progress = [
  {
    value: {
      num: '100',
      mark: '%'
    },
    text: 'positive feedback',
  },
  {
    value: {
      num: '30',
      mark: '+'
    },
    text: 'finished projects',
  },
  {
    value: {
      num: '10',
      mark: '+'
    },
    text: 'clients worldwide',
  },
]

export const HomeText = () => {
  return (
    <section className={css.intro}>
      <div className="wrapper" data-wrapper>
        <div className={css.wrapper} data-children data-fade>
          <h1 >{data.title}</h1>
          <p className={css.text} >{data.text}</p>
          <div >
            <MyLink href={data.link} title='Start with a free consultation'>{data.button}</MyLink>
          </div>
          <div className={css.progress}>
            {progress.map((t) => {
              return (
                <div key={t.text}>
                  <p className={css.value} >
                    <span data-count={t.value.num}></span>
                    <span>{t.value.mark}</span>
                  </p>
                  <p className={css.text}>{t.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}