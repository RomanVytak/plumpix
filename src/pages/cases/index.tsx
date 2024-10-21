import { Cases } from "../../components/cases/cases"
import { cases_home } from "../../data"
import Layout from "../../layout"

const CasesPage = () => {
  return (
    <Layout>
      <Cases data={cases_home} />
    </Layout>
  )
}

export default CasesPage
