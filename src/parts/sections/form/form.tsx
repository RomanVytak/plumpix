import { useState } from 'react'
import { FormLabels } from '../../../components/labels/Form'
import css from './form.module.scss'

type Props = {
  data?: {
    title?: string
    subtitle?: string
  }
}

const LABELS = {
  name: {
    title: 'Name*',
    type: 'text',
    placeholder: 'Please type your name',
    required: true,
  },
  email: {
    title: 'Email*',
    type: 'text',
    placeholder: 'Please type your email address',
    required: true,
  },
  message: {
    title: 'How can we help you?*',
    type: 'textarea',
    placeholder: 'Tell us briefly about ypur project, or ak us anything',
  }
}

enum MESSAGES {
  fail = 'Failed to send the message.',
  error = 'An error occurred while sending the message.',
  success = 'Message sent successfully!',
}

const defTitle = 'Let’s Plan Your Project Together';

const DEFAULT_DATA = {
  email: '',
  message: '',
  name: '',
}

export const Form = ({ data }: Props) => {
  const [submiting, setSubmiting] = useState(false);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmiting(e => !e)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus(MESSAGES.success);
        setFormData({...DEFAULT_DATA});
      } else {
        setStatus(MESSAGES.error);
      }
      setSubmiting(e => !e);
    } catch (error) {
      setStatus(MESSAGES.error);
      setSubmiting(e => !e);
    }
  };

  console.log('--- formData ', formData)

  return (
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
            <h2 data-child className={data?.subtitle ? '' : 'font_48'}>{data?.title || defTitle}</h2>
            {data?.subtitle && <p data-child>{data.subtitle}</p>}
            <form onSubmit={handleSubmit}>
              <FormLabels labels={LABELS} handleChange={handleChange} formData={formData} />
              <div className={css.status} data-child>
                <button type='submit' className={css.submit} disabled={submiting}>Send message</button>
                {submiting && <div className={css.loader} />}
                {status && <div className={css.status}>{status}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
