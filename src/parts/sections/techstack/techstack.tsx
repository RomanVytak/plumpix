import Image from 'next/image'
import css from './techstack.module.scss'
import { TECHSTACK } from '../../../const';

export const TechStack = () => {
  return (
    <section className={css.root}>
      <div className="wrapper md" data-wrapper data-fade='in'>
        <div className={css.wrap}>
          <h2 data-fade>{`Our Tech stack includes`}</h2>
          <div className={css.items} data-fade data-children>
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
