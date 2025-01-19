import Image from "next/image"
import css from './industries.module.scss'
import { MyLink } from "../../../components/link/link"
import clsx from "clsx"
import Link from "next/link"

const temt = [
  {
    name: 'eLearning',
    icon: 'elearning.svg',
  },
  {
    name: 'Healthcare',
    icon: 'healthcare.svg',
  },
  {
    name: 'Fintech',
    icon: 'fintech.svg',
  },
  {
    name: 'Insurance',
    icon: 'insurance.svg',
  },
  {
    name: 'Your Industry',
    icon: 'your-industry.svg',
    button: true,
  },
]

export const Industries = () => {
  return (
    <section className={css.root}>
      <div className={`wrapper ${css.wrapper}`}>
        <h2 data-fade>{`Industries we work with`}</h2>
        <div className={css.items} data-fade data-children>
          {temt.map((t) => {
            return (
              <div key={t.name} className={clsx(css.itemWrap, {
                [css.itemButton]: !!t.button
              })}>
                <div className={css.item}>
                  {t.button && <Link href="/contacts" className={css.link} />}
                  <div className={css.item_icon}>
                    <Image src={`/icons/industries/${t.icon}`} alt={t.name} width={50} height={50} />
                  </div>
                  <p className="font_25">{t.name}</p>
                </div>
                {t.button && (
                  <div className={css.button}>
                    <MyLink href="/contacts" title="Contacts">{`Contact us`}</MyLink>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}