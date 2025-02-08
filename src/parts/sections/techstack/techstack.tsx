import css from './techstack.module.scss'
import { TECHSTACK } from '../../../const';
import { TechstackItem } from '../../../components/techstackItem/techstackItem';

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
                <TechstackItem key={name} icon={icon} name={name} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
