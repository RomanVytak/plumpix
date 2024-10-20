import Image from 'next/image'
import { Button } from '../button/button'
import s from './cases.module.scss'

const temp = [
  {
    image: '/img/cases/case.jpg',
    name: 'Corporate EdTech Solution',
    tags: ['Team Extension', 'Team: 4', 'Duration: 12+ month'],
    text: 'Learning management platform assists companies in their change management and employee training efforts. Users can create courses, upload videos, track progress of their employees and integrate quizzes and forms into the platform.',
    link: '#',
  },
  {
    image: '/img/cases/case.jpg',
    name: 'Corporate EdTech Solution',
    tags: ['Team Extension', 'Team: 4', 'Duration: 12+ month'],
    text: 'Learning management platform assists companies in their change management and employee training efforts. Users can create courses, upload videos, track progress of their employees and integrate quizzes and forms into the platform.',
    link: '#',
  },
  {
    image: '/img/cases/case.jpg',
    name: 'Corporate EdTech Solution',
    tags: ['Team Extension', 'Team: 4', 'Duration: 12+ month'],
    text: 'Learning management platform assists companies in their change management and employee training efforts. Users can create courses, upload videos, track progress of their employees and integrate quizzes and forms into the platform.',
    link: '#',
  },
]

export const Cases = () => {
  return (
    <div className={s.root}>
      <h2>{`Our cases of software product development service`}</h2>
      <div className={s.items}>
        {temp.map((t) => {
          return (
            <div key={t.name} className={s.item}>
              <div className={s.image}>
                <Image src={t.image} alt={t.name} width={402} height={428} />
              </div>
              <div className={s.content}>
                <h2>{t.name}</h2>
                <div className={s.tags}>
                  {t.tags.map((tag) => {
                    return (
                      <span>{tag}</span>
                    )
                  })}
                </div>
                <div className={s.text}>
                  {t.text}
                </div>
                <Button href={t.link}>Learn more</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
