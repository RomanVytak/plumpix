import { useState } from 'react'
import { FormLabels } from '../../../components/labels/Form'
import css from './form.module.scss'

type Props = {
  data?: {
    title?: string
    subtitle?: string
  }

}

const labels = {
  email: {
    title: 'Email*',
    type: 'text',
    placeholder: 'Please type your email address',
    required: true,
  },
  message: {
    title: 'How can we help you?*',
    type: 'textarea',
    placeholder: 'Tell u briefly about ypur project, or ak u anything',
  }

}

const defTitle = 'Let’s discuss your project';


export const Form = ({ data }: Props) => {
  const [submiting, setSubmiting] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmiting(e => !e)

    setTimeout(() => {
      setSubmiting(e => !e)
    }, 1000)
  }

  return (
    <section className={css.root}>
      <div className="wrapper md" data-wrapper>
        <div className={`wrapper-grid ${css.grid}`}>
          <div className={css.grid_left}>
            <div className={css.ceo}>
              <div>
                <a href='/' target='_blank' className={`${css.link} font_18`} >
                  <img src="/socials/linkedin.svg" alt="Roman Vytak" />
                  Roman Vytak
                </a>
                <p>CEO in PlumPi</p>
              </div>
            </div>
          </div>
          <div className={css.grid_form}>
            <h2 className={data?.subtitle ? '' : 'font_48'}>{data?.title || defTitle}</h2>
            {data?.subtitle && <p>{data.subtitle}</p>}

            <form onSubmit={onSubmit} >
              <FormLabels labels={labels} />
              <div className={css.status}>
                <button type='submit' className={css.submit} disabled={submiting}>Send message</button>
                {submiting && <div className={css.loader}></div>}
              </div>
            </form>


          </div>
        </div>
      </div>
    </section>
  )
}
