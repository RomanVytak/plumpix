import { useEffect, useState } from 'react'
import { FormLabels } from '../../../components/labels/Form'
import css from './form.module.scss'
import clsx from 'clsx'

const LABELS = {
  name: {
    title: 'Name*',
    type: 'text',
    placeholder: 'Please type your name',
    required: true,
  },
  email: {
    title: 'Email*',
    type: 'email',
    placeholder: 'Please type your email address',
    required: true,
  },
  message: {
    title: 'How can we help you?*',
    type: 'textarea',
    placeholder: 'Tell us briefly about ypur project, or ak us anything',
    required: true,
  }
}
type Status = {
  success?: boolean | null,
  message?: string
}

enum MESSAGES {
  error = 'An error occurred while sending the message.',
  // fail = 'Failed to send the message.',
  success = 'Your message has been sent!',
}

const DEFAULT_DATA = {
  email: '',
  message: '',
  name: '',
}

const DEFAULT_STATUS = {
  success: null,
  message: '',
}

const HEADERS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
}

const PopUp = ({ callback }: { callback: () => void }) => {
  const [active, setActive] = useState((false));

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 10)
  }, [])

  const exit = () => {
    setActive(false)
    setTimeout(callback, 300)
  }

  return (
    <div className={clsx(css.popup, active && css.active)}>
      <span className={css.over} onClick={exit} />
      <div className={css.wrapper}>
        <p className={css.title}>{`Your message has been sent!`}</p>
        <p className={clsx('font_18_regular', css.subtitle)}>{`We’ll get back to you as soon as possible.`}</p>
        <button
          className={`font_18 ${css.close}`}
          aria-label='close popup'
          onClick={exit}
        >
          {`Close`}
        </button>
      </div>
    </div>
  )
}

export const Form = () => {
  const [submiting, setSubmiting] = useState(false);
  const [status, setStatus] = useState<Status>(DEFAULT_STATUS);
  const [formData, setFormData] = useState(DEFAULT_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(e => ({ ...e, [name]: value }));
  };

  const clearStatus = () => setStatus(DEFAULT_STATUS)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmiting(e => !e)
    clearStatus();

    try {
      const response = await fetch('/api/send-email', {
        ...HEADERS,
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      data.success && setFormData({ ...DEFAULT_DATA });
      setStatus(data);
      setSubmiting(e => !e);
    } catch (error) {
      setStatus({
        success: false,
        message: MESSAGES.error,
      });
      setSubmiting(e => !e);
    }
  };

  return (
    <>
      <section className={css.root}>
        <div className="wrapper md" data-wrapper data-fade='in'>
          <div className={`wrapper-grid ${css.grid}`}>
            <div className={css.grid_left}>
              <div className={css.ceo} data-fade>
                <div>
                  <a href='/' target='_blank' className={`${css.link} font_18`}>
                    <img src="/socials/linkedin.svg" alt="Roman Vytak" />
                    {`Roman Vytak`}
                  </a>
                  <p>{`CEO at Plumpix`}</p>
                </div>
              </div>
            </div>
            <div className={css.grid_form} data-fade data-children>
              <h2 data-child className="font_48">{`Start Creating Something Exceptional Together!`}</h2>
              <form onSubmit={handleSubmit}>
                <FormLabels labels={LABELS} handleChange={handleChange} formData={formData} />
                {
                  status && status.success === false &&
                  <div className={css.msg}>{status.message}</div>
                }
                <div className={css.status} data-child>
                  <button type='submit' className={css.submit} disabled={submiting}>Send message</button>
                  {submiting && <div className={css.loader} />}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {status.success && <PopUp callback={clearStatus} />}
    </>
  )
}
