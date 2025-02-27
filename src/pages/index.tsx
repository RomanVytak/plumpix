import { Form } from "../parts/sections/form/form"
import { Industries } from "../parts/page-home/industries/industries"
import { Reviews } from "../parts/sections/reviews/reviews"
import { offers_home } from "../data"
import { HomeText } from "../parts/page-home/homeText/homeText"
import { cases } from "../data/cases"
import { TechStack } from "../parts/sections/techstack/techstack"
import { Cases } from "../parts/sections/cases/cases"
import { Cards } from "../parts/sections/cards/cards"
import VantaBackground from "../components/bgAnimation/bgAnimation"

const Home = () => {
  return (
    <>
      <VantaBackground />
      <HomeText />
      <Cards title="How We Can Help You" data={offers_home} />
      <Reviews />
      <Cases data={cases} title='Our Software Product<br>Development Success Stories' />
      <Industries />
      <TechStack />
      <Form />
    </>
  )
}

export default Home