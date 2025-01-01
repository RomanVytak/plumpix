import { Text } from "../../parts/page-cases/intro/text"
import { Reviews } from "../../parts/sections/reviews/reviews"
import { Soon } from "../../parts/page-cases/soon/soon"
import { cases } from "../../data/cases"
import { Cases } from "../../parts/sections/cases/cases"

const CasesPage = () => {
  return (
    <>
      <Text />
      <Cases data={cases} />
      <Reviews />
      <Soon />
    </>
  )
}

export default CasesPage
