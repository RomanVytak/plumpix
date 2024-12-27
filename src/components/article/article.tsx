import Image from "next/image"
import css from './article.module.scss'
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
    <section className={css.root}>
      <div className={`wrapper ${css.wrapper}`}>
        <div className={`wrapper-grid ${css.grid}`}>
          <div className={css.text}>
            <h1>{data.title}</h1>
            <p className="font_18_reg">{data.text}</p>
            {data.button && data.link && (
              <MyLink href={data.link} title={data.button}>{data.button}</MyLink>
            )}
          </div>
          <div className={css.images}>
            <Image src={data.image} alt={data.title} width={355} height={370} />
          </div>
        </div>
      </div>
    </section>
  )
}