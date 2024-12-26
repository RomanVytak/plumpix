import { Cases } from "../../components/cases/cases"
import { cases } from "./_/data"

const CasesPage = () => {
  return (
    <>
      <Cases data={cases} />
    </>
  )
}

export default CasesPage
