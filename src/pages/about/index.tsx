import { Article } from "../../parts/sections/article/article"
import { Form } from "../../parts/sections/form/form"
import { Founders } from "../../parts/page-about/founders/founders"
import { Mapa } from "../../parts/page-about/location/location"
import { page_about, offers_about } from "../../data"
import { Cards } from "../../parts/sections/cards/cards"

const About = () => {
  return (
    <>
      <Article data={page_about} />
      <Mapa />
      <Cards title="Our Core Values" data={offers_about} />
      {/* <Founders /> */}
      <Form />
    </>
  )
}

export default About