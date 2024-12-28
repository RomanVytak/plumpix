import Image from 'next/image'
import css from './techstack.module.scss'
import { TECHSTACK } from '../../../const';

export const TechStack = () => {
  return (
    <section className={css.root}>
      <div className="wrapper md" data-wrapper>
        <div className={css.wrap}>
          <h2>{`Our Tech stack includes`}</h2>
          <div className={css.items}>
            {Object.keys(TECHSTACK).map((t) => {
              const name = TECHSTACK[t].name;
              const icon = TECHSTACK[t].icon;
              return (
                <div key={name} className={`${css.item} font_18_reg`}>
                  <Image src={icon} alt={name} width={30} height={30} />
                  <p >{name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
