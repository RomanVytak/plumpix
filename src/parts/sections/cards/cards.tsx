import { MyLink } from '../../../components/link/link';
import { OfferCardProps } from '../../../types';
import s from './cards.module.scss'

type Props = {
  title: string;
  type?: 'colorful';
  data: OfferCardProps[];
  button?: {
    title: string,
    link: string
  };
}

export const Cards = ({ title, data, button, type }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <section className={`${s.root} ${type ? s[type] : ""}`}>
      <div className="wrapper">
        <h2 data-fade dangerouslySetInnerHTML={{ __html: title }} />
        <div className={`wrapper-grid ${s.items}`} data-fade data-children>
          {data.map((t) => {
            return (
              <div className={s.card} key={t.title}>
                <h3 dangerouslySetInnerHTML={{ __html: t.title }} />
                <p>{t.text}</p>
                {t.link && t.link && (
                  <MyLink
                    href={t.link}
                    icon={true}
                    type='white'
                    size='medium'
                    title={t.button}
                  >
                    {t.button}
                  </MyLink>
                )}
              </div>
            )
          })}
        </div>
        {button && (
          <div className={s.button} data-fade>
            <MyLink href={button.link} type='black-white' title={button.title}>{button.title}</MyLink>
          </div>
        )}
      </div>
    </section>
  )
}
