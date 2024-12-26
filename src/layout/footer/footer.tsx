import Link from 'next/link'
import { PlumpixLogo } from '../../components/logo/logo'
import css from './footer.module.scss'
import { Menu } from '../menu/menu'
import { title } from 'process';


const dataMail = 'ask@binary-studio.com';

const forQuestions = [
  {
    icon: 'book.svg',
    link: '/',
    title: 'Book a meeting'
  },
  {
    icon: 'whatsapp.svg',
    link: '/',
    title: 'Ask questions'
  }

]


export const Footer = () => {

  return (
    <footer className={css.footer}>
      <div className="wrapper" data-wrapper>
        <div className={css.wrap}>
          <div className={css.wrap_left}>
            <Link href={'/'} className={`site-logo`} aria-label='Plumpix Logo'>
              <PlumpixLogo textColor='white' />
            </Link>
          </div>
          <div className={css.wrap_right}>
            <div className={css.contacts}>
              <a className={css.mail} href={`mailto:${dataMail}`}>
                <div className="mask_mail" data-mail></div>
                {dataMail}
              </a>

              <div className={css.column}>
                {forQuestions.map((t) =>
                  <a key={t.title} href={t.link} className={css.item} aria-label={t.title} target='_blank'>
                    <img src={`/socials/${t.icon}`} alt={t.title} className={css.icon} />
                    {t.title}
                  </a>
                )}
              </div>
            </div>
            <Menu showSubPages={false} />

            <div className={css.contacts}>
              <div className={css.column}>
                <p className='font_18_bold'>Headquarters</p>
                <p className={css.location}>
                  <img src="/icons/flag_ua.svg" alt="Lviv, Ukraine" />
                  Lviv, Ukraine</p>
              </div>
              <div className={css.column}>
                <p className='font_18_bold'>International Offices</p>
                <p className={css.location}>
                  <img src="/icons/flag_uk.svg" alt="Wimborne, United Kingdom" />
                  Wimborne, United Kingdom
                </p>
                <p className={css.location}>
                  <img src="/icons/flag_cy.svg" alt="Limassol, Cyprus" />
                  Limassol, Cyprus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}