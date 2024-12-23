import { CaseProps } from '../../../pages/cases/_/types'
import s from './caseAbout.module.scss'

export const CaseAbout = ({ data }: { data: CaseProps }) => {
  return (
    <div className={s.root}>
      {data.slug}
    </div>
  )
}
