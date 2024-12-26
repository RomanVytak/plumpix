import { Cards } from "../components/cards/cards"
import { Cases } from "../components/cases/cases"
import { Form } from "../components/form/form"
import { HomeText } from "../components/homeText/homeText"
import { Industries } from "../components/industries/industries"
import { Reviews } from "../components/reviews/reviews"
import { TechStack } from "../components/techstack/techstack"
import { offers_home } from "../data"
import { cases } from "./cases/_/data"

const Home = () => {
  return (
    <>
      <HomeText />
      <Cards title="What we can provide for you" data={offers_home} />
      <Reviews />
      <Cases data={cases} />
      <Industries />
      <TechStack />
      <Form />
    </>
  )
}

export default Home