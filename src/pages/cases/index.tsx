import { Cases } from "../../components/cases/cases"
import { CasesText } from "../../components/casesText/text"
import { Reviews } from "../../components/reviews/reviews"
import { cases } from "./_/data"

const CasesPage = () => {
  return (
    <>
      <CasesText />
      <Cases data={cases} />
      <Reviews />
    </>
  )
}

export default CasesPage
