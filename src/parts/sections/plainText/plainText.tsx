import css from './plainText.module.scss'

type Props = {
  data: string;
}

export const PlainText = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <section className={`${css.root}`}>
      <div className="wrapper">
        <div className={css.content} dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </section>
  )
}
