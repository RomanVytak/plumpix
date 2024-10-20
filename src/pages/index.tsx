import { Cases } from "../components/cases/cases"
import { Form } from "../components/form/form"
import { Reviews } from "../components/reviews/reviews"
import { Tabs } from "../components/tabs/tabs"
import { TechStack } from "../components/techstack/techstack"
import Layout from "../layout"
import { HomeStep } from "../parts/home/home/home"
import { Offer } from "../parts/home/offer/offer"

const Home = () => {
  return (
    <Layout>
      <HomeStep />
      <Offer />
      <Reviews />
      <Cases />
      <TechStack />
      <Tabs title="Stages of our  development process" />
      <Form />
    </Layout>
  )
}

export default Home