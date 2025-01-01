import { MyLink } from "../../../components/link/link"
import css from './soon.module.scss'

const data = {
  title: 'More projects are coming soon!',
  text: `Can't find a solution that matches your needs or have questions? Let's connect and discuss your unique project`,
  button: 'Contact us',
  link: '/contacts',
}

export const Soon = () => {
  return (
    <section className={css.soon}>
      <div className={`wrapper`} data-wrapper>
        <div className={css.wrapper} data-fade data-children>
          <h2 className="font_48">{data.title}</h2>
          <p className={`${css.text} font_18_reg`}>{data.text}</p>
          <div className={css.button} >
            <MyLink href={data.link} type='black' title={data.button}>{data.button}</MyLink>
          </div>
        </div>
      </div>
    </section>
  )
}