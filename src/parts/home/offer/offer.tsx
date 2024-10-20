import { Button } from '../../../components/button/button'
import { Card, CardWrap } from '../../../components/card/card'
import s from './offer.module.scss'

const temp = [
  {
    title: 'Custom Software Development',
    text: 'Rely on our product development expertise to build an MVP from scratch and evolve it into a full-featured platform',
    button: 'Learn more',
    link: '#',
  },
  {
    title: 'Custom Software Development',
    text: 'Rely on our product development expertise to build an MVP from scratch and evolve it into a full-featured platform',
    button: 'Learn more',
    link: '#',
  },
  {
    title: 'Custom Software Development',
    text: 'Rely on our product development expertise to build an MVP from scratch and evolve it into a full-featured platform',
    button: 'Learn more',
    link: '#',
  }
]

export const Offer = () => {
  return (
    <div className={s.root}>
      <CardWrap>
        {temp.map((t) => {
          return (
            <Card>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <Button href="#">{t.button}</Button>
            </Card>
          )
        })}
      </CardWrap>
    </div>
  )
}