import { Cards } from "../components/cards/cards"
import { Cases } from "../components/cases/cases"
import { Form } from "../components/form/form"
import { HomeText } from "../components/homeText/homeText"
import { Industries } from "../components/industries/industries"
import { Reviews } from "../components/reviews/reviews"
import { Tabs } from "../components/tabs/tabs"
import { TechStack } from "../components/techstack/techstack"
import { offers_home } from "../data"
import Layout from "../layout"
import { cases } from "./cases/_/data"

const Home = () => {
  return (
    <Layout>
      <HomeText />
      <Cards title="Some title" data={offers_home} />
      <Reviews />
      <Cases data={cases} />
      <Industries />
      <TechStack />
      <Form />
    </Layout>
  )
}

export default Home