import Image from "next/image"
import s from './article.module.scss'
import { MyLink } from "../link/link"

type ArticleProps = {
  title: string
  text: string
  button?: string
  link?: string
  image: string
}

export const Article = ({ data }: { data: ArticleProps }) => {
  return (
    <div className={s.root}>
      <div className={s.text}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        {data.button && data.link && (
          <MyLink href={data.link} title={data.button}>{data.button}</MyLink>
        )}
      </div>
      <div className={s.image}>
        <Image src={data.image} alt={data.title} width={355} height={370} />
      </div>
    </div>
  )
}