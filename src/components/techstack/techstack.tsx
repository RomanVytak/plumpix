import Image from 'next/image'
import s from './techstack.module.scss'
import { TECHSTACK } from '../../const'

export const TechStack = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <h2>{`Our Tech stack includes`}</h2>
        <div className={s.items}>
          {Object.keys(TECHSTACK).map((t) => {
            const name = TECHSTACK[t].name;
            const icon = TECHSTACK[t].icon;
            return (
              <div key={name} className={s.item}>
                <Image src={icon} alt={name} width={30} height={30} />
                <span>{name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
