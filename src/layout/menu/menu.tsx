import s from './menu.module.scss'

export const Menu = () => {
  return (
    <div className={s.root}>
      <a href="#">Our work</a>
      <a href="#">What we do</a>
      <a href="#">About us</a>
      {/* <a href="#">Blog</a> */}
    </div>
  )
}