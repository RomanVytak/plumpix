import { MyLink } from '../../../components/link/link'
import css from './homeContacts.module.scss'

const data = {
  title: 'Start Creating Something<br>Exceptional Together!',
  button: 'Book a meeting',
  link: 'https://calendar.app.google/2tCsPP7RwBfJE9vV9',
  or: 'Or you can fill out the form and we’ll get back to you sooner.',
}

export const HomeContacts = () => {
  return (
    <section className={css.intro}>
      <div className="wrapper" data-wrapper>
        <div className={css.wrapper} data-children data-fade>
          <h2 className='font_36' dangerouslySetInnerHTML={{ __html: data.title }} />
          <div>
            <MyLink
              href={data.link}
              target='_blank'
              title='Start with a free consultation'
              type='black-blue'
            >
              {data.button}
            </MyLink>
          </div>
          <p>{data.or}</p>
        </div>
      </div>
    </section>
  )
}