import css from './location.module.scss'

const data = {
  title: 'Based in Ukraine, <br> we serve the world.',
  subtitle: "Our main office i located in Lviv"

}

export const Mapa = () => {
  return (
    <section className={css.root}>
      <div className="wrapper" data-wrapper>
        <div className={`wrapper-grid ${css.grid}`}>
          <div className={css.word}>
            <div className={css.word_icons}>
              <img src="/icons/word.svg" alt="Word Map" className={css.word_map} />
              <img src="/icons/dots.svg" alt="Word Dots" className={css.word_dots} />
            </div>
          </div>
          <div className={css.info}>
            <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
            <p>{data.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}