import { Cases } from "../../components/cases/cases"
import Layout from "../../layout"
import { cases } from "./_/data"

const CasesPage = () => {
  return (
    <Layout>
      <Cases data={cases} />
    </Layout>
  )
}

export default CasesPage
