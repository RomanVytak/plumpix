import { MyLink } from '../../../components/link/link'
import css from './intro.module.scss'

const data = {
  title: 'Ooops! We can’t find that page',
  button: 'Go Home',
  link: '/',
}

export const Page404 = () => {
  return (
    <section className={css.intro}>
      <div className="wrapper" data-wrapper>
        <div className={css.wrapper}>
          <span className={`${css.number} font_48`}>404</span>
          <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
          <div>
            <MyLink href={data.link} title={data.button}>{data.button}</MyLink>
          </div>
        </div>
      </div>
    </section>
  )
}