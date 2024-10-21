import { Cards } from "../components/cards/cards"
import { Cases } from "../components/cases/cases"
import { Form } from "../components/form/form"
import { HomeText } from "../components/home/home"
import { Reviews } from "../components/reviews/reviews"
import { Tabs } from "../components/tabs/tabs"
import { TechStack } from "../components/techstack/techstack"
import { cases_home, offers_home } from "../data"
import Layout from "../layout"

const Home = () => {
  return (
    <Layout>
      <HomeText />
      <TechStack />
      <Cards data={offers_home} />
      <Reviews />
      <Cases data={cases_home} />
      <Tabs title="Stages of our  development process" />
      <Form />
    </Layout>
  )
}

export default Home