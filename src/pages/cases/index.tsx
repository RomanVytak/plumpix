import { Cases } from "../../components/cases/cases"
import { CasesText } from "../../components/casesText/text"
import { Reviews } from "../../components/reviews/reviews"
import { Soon } from "../../components/soon/soon"
import { cases } from "./_/data"

const CasesPage = () => {
  return (
    <>
      <CasesText />
      <Cases data={cases} />
      <Reviews />
      <Soon />
    </>
  )
}

export default CasesPage
