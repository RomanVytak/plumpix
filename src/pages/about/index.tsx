import { Article } from "../../components/article/article"
import { Cards } from "../../components/cards/cards"
import { Form } from "../../components/form/form"
import { Founders } from "../../components/founders/founders"
import { Mapa } from "../../components/location/location"
import { article_about, offers_home } from "../../data"

const About = () => {
  return (
    <>
      <Article data={article_about} />
      <Mapa />
      <Cards title="Title here" data={offers_home} />
      <Founders />
      <Form />
    </>
  )
}

export default About