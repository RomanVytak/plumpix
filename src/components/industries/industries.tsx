import Image from "next/image"
import { Button } from "../button/button"
import s from './industries.module.scss'

const temt = [
  {
    name: 'eLearning',
    icon: '/icons/techstack/angular.svg',
  },
  {
    name: 'Healthcare',
    icon: '/icons/techstack/angular.svg',
  },
  {
    name: 'Fintech',
    icon: '/icons/techstack/angular.svg',
  },
  {
    name: 'Insurance',
    icon: '/icons/techstack/angular.svg',
  },
  {
    name: 'Your Industry',
    icon: '/icons/techstack/angular.svg',
  },
]

export const Industries = () => {
  return (
    <div className={s.root}>
      <h2>Industries we work with</h2>
      <div className={s.items}>
        {temt.map((t) => {
          return (
            <div key={t.name} className={s.item}>
              <Image src={t.icon} alt={t.name} width={50} height={50} />
              <p>{t.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}