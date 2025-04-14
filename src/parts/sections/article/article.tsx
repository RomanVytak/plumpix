import Image from "next/image"
import css from './article.module.scss'
import { MyLink } from "../../../components/link/link"
import { ArticleProps } from "../../../types"
import clsx from "clsx"

export const Article = ({ data }: { data: ArticleProps }) => {
  return (
    <section className={css.root}>
      <div className={`wrapper ${css.wrapper}`}>
        <div className={`wrapper-grid ${css.grid}`}>
          <div className={css.text} data-fade data-children>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
            {data.button && data.link && (
              <MyLink href={data.link} title={data.button}>{data.button}</MyLink>
            )}
          </div>
          <div className={clsx(css.images, {
            [css.blue]: data.imageBg
          })} data-fade>
            {data.image && (
              <Image src={data.image} alt={data.title} width={1400} height={1400} />
            )}
            {data.tags && (
              <div className={css.tags}>
                <div className={css.wrap}>
                  {data.tags.map((tag) => {
                    return (
                      <span key={tag}>{tag}</span>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}