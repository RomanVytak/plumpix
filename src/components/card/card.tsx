import s from './card.module.scss'

export const Card = ({ children }) => {
  return (
    <div className={s.card}>{children}</div>
  )
}

export const CardWrap = ({ children }) => {
  return (
    <div className={s.wrap}>
      {children}
    </div>
  )
}
