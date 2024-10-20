import Image from 'next/image'
import s from './techstack.module.scss'

const temp = [
  {
    icon: '/icons/techstack/ts.svg',
    name: 'React.JS',
  },
  {
    icon: '/icons/techstack/ts.svg',
    name: 'Next.JS',
  },
  {
    icon: '/icons/techstack/ts.svg',
    name: 'WordPress',
  },
  {
    icon: '/icons/techstack/ts.svg',
    name: 'TypeScript',
  },
  {
    icon: '/icons/techstack/ts.svg',
    name: 'Laravel',
  },
  {
    icon: '/icons/techstack/ts.svg',
    name: 'Symphony',
  },
  {
    icon: '/icons/techstack/ts.svg',
    name: '.NET',
  },
]

export const TechStack = () => {
  return (
    <div className={s.root}>
      <h2>{`Our Tech stack includes`}</h2>
      <div className={s.items}>
        {temp.map((t) => {
          return (
            <div className={s.item}>
              <Image src={t.icon} alt={t.name} width={30} height={30} />
              <span>{t.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
