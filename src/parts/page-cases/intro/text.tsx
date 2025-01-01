import { MyLink } from "../../../components/link/link"
import css from './text.module.scss'

const data = {
  title: 'Our Case Studies',
  text: `Explore our portfolio of innovative software solutions. From FinTech and Healthcare to MarTech and beyond, we’ve delivered cutting-edge projects for diverse industries.`,
  button: 'Get in touch',
  link: '/contacts',
}

export const Text = () => {
  return (
    <section className={css.intro}>
      <div className={`wrapper ${css.wrapper}`} data-fade data-children>
        <h1>{data.title}</h1>
        <p className={`${css.text} font_18_reg`}>{data.text}</p>
        <div>
          <MyLink href={data.link} icon={true} type='stroke' title={data.button}>{data.button}</MyLink>
        </div>
      </div>
    </section>
  )
}