import Image from "next/image"
import { Button } from "../button/button"
import css from './industries.module.scss'

const temt = [
  {
    name: 'eLearning',
    icon: 'angular.svg',
  },
  {
    name: 'Healthcare',
    icon: 'angular.svg',
  },
  {
    name: 'Fintech',
    icon: 'angular.svg',
  },
  {
    name: 'Insurance',
    icon: 'angular.svg',
  },
  {
    name: 'Your Industry',
    icon: 'angular.svg',
  },
]

export const Industries = () => {
  return (
    <section className={css.root}>
      <div className={`wrapper ${css.wrapper}`}>
        <h2>Industries we work with</h2>
        <div className={css.items}>
          {temt.map((t) => {
            return (
              <div key={t.name} className={css.item}>
                <div className={css.item_icon}>
                  <Image src={`/icons/techstack/${t.icon}`} alt={t.name} width={50} height={50} />
                </div>
                <p className="font_25">{t.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}