import Image from "next/image"
import css from './intro.module.scss'
import { CaseProps } from "../../../pages/cases/_/types"

export const Intro = ({ data }: { data: CaseProps['home'] }) => {
  return (
    <section className={css.root}>
      <div className={`wrapper md ${css.root_wrapper}`}>

        <div className={css.root_tags}>
          {data.tags.map((t) => <span key={t}>{t}</span>)}
        </div>
        <h1 className={css.root_title}>{data.name}</h1>
        <div className={css.root_icon}>
          <Image src={data.image} alt={data.name} width={1460} height={100} />
        </div>
      </div>
    </section>
  )
}