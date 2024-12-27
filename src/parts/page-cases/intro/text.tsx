import { MyLink } from "../../../components/link/link"
import css from './text.module.scss'

const data = {
  title: 'Our Case Studies',
  text: `We've worked on dozens of advanced software solutions covering among others FinTech, Healthcare, and MarTech domains and we've also designed and built our own digital products.`,
  button: 'Get in touch',
  link: '/contacts',
}

export const Text = () => {
  return (
    <section className={css.intro}>
      <div className={`wrapper ${css.wrapper}`}>
        <h1>{data.title}</h1>
        <p className={`${css.text} font_18_reg`}>{data.text}</p>
        <div >
          <MyLink href={data.link} icon={true} type='stroke' title={data.button}>{data.button}</MyLink>
        </div>
      </div>
    </section>
  )
}