import Link from 'next/link'
import { PlumpixLogo } from '../../components/logo/logo'
import css from './footer.module.scss'
import { Menu } from '../menu/menu'

const forQuestions = [
  {
    icon: 'email.svg',
    link: 'mailto:ask@plumpix.io',
    title: 'ask@plumpix.io',
    target: false,
  },
  {
    icon: 'google-meet.svg',
    link: 'https://calendar.app.google/2tCsPP7RwBfJE9vV9',
    title: 'Book a meeting',
    target: true,
  }
]

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className="wrapper md" data-wrapper>
        <div className={`wrapper-grid ${css.grid}`} data-fade='in'>
          <div className={css.grid_left} data-fade>
            <Link href={'/'} className={`site-logo`} aria-label='PlumPix Logo'>
              <PlumpixLogo textColor='white' />
            </Link>
            <p className="copy">© {currentYear} PlumPix</p>
          </div>
          <div className={css.grid_right} data-fade data-children>
            <div className={css.contacts}>
              <div className={css.column}>
                {forQuestions.map((t) =>
                  <a
                    key={t.title}
                    href={t.link}
                    className={css.item}
                    aria-label={t.title}
                    target={t.target ? '_blank' : '_self'}
                  >
                    <img src={`/socials/${t.icon}`} alt={t.title} className={css.icon} />
                    {t.title}
                  </a>
                )}
              </div>
            </div>
            <Menu showSubPages={false} location='footer' />
            <div className={css.contacts}>
              <div className={css.column}>
                <p className='font_18_bold'>{`Headquarters`}</p>
                <p className={css.location}>
                  <img src="/icons/flag_ua.svg" alt="Lviv, Ukraine" />
                  {`Lviv, Ukraine`}
                </p>
              </div>
              <div className={css.column}>
                <p className='font_18_bold'>{`International Offices`}</p>
                <p className={css.location}>
                  <img src="/icons/flag_uk.svg" alt="Wimborne, United Kingdom" />
                  {`Wimborne, United Kingdom`}
                </p>
                <p className={css.location}>
                  <img src="/icons/flag_cy.svg" alt="Limassol, Cyprus" />
                  {`Limassol, Cyprus`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
