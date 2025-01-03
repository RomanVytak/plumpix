import css from './location.module.scss'

const data = {
  title: 'Headquartered in Ukraine, Delivering Globally',
  subtitle: 'Our main office is located in Lviv, but our expertise knows no borders',
}

export const Mapa = () => {
  return (
    <section className={css.root}>
      <div className="wrapper md" data-wrapper data-fade='in'>
        <div className={`wrapper-grid ${css.grid}`}>
          <div className={css.word}>
            <div className={css.word_icons} data-fade>
              <img src="/icons/word.svg" alt="Word Map" className={css.word_map} />
              <img src="/icons/dots.svg" alt="Word Dots" className={css.word_dots} />
            </div>
          </div>
          <div className={css.info} data-fade data-children>
            <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
            <p>{data.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}