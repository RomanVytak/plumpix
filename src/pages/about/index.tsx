import { Article } from "../../parts/sections/article/article"
import { Form } from "../../parts/sections/form/form"
import { Founders } from "../../parts/page-about/founders/founders"
import { Mapa } from "../../parts/page-about/location/location"
import { article_about, offers_home } from "../../data"
import { Cards } from "../../parts/sections/cards/cards"

const About = () => {
  return (
    <>
      <Article data={article_about} />
      <Mapa />
      <Cards title="Our Values" data={offers_home} />
      <Founders />
      <Form />
    </>
  )
}

export default About