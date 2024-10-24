import Image from "next/image"
import s from './caseHome.module.scss'
import { CaseProps } from "../../pages/cases/_/types"

export const CaseHome = ({ data }: { data: CaseProps['home'] }) => {
  return (
    <div className={s.root}>
      <div className={s.tags}>
        {data.tags.map((t) => {
          return (
            <span key={t}>{t}</span>
          )
        })}
      </div>
      <h1>{data.name}</h1>
      <Image src={data.image} alt={data.name} width={1240} height={434} />
    </div>
  )
}