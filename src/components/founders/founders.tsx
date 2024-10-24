import Image from "next/image"
import s from './founders.module.scss'

const temp = [
  {
    name: 'Roman',
    image: '/img/cases/case.jpg',
    position: 'CEO',
    linkedin: '#',
  },
  {
    name: 'Olena',
    image: '/img/cases/case.jpg',
    position: 'CEO',
    linkedin: '#',
  }
]

export const Founders = () => {
  return (
    <div className={s.root}>
      <h2>{`Meet the founders`}</h2>
      <div className={s.items}>
        {temp.map((t) => {
          return (
            <div key={t.name} className={s.item}>
              <Image src={t.image} alt={t.name} width={400} height={455} />
            </div>
          )
        })}
      </div>
    </div>
  )
}