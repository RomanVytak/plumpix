import Link from 'next/link'
import s from './menu.module.scss'

export const Menu = () => {
  return (
    <div className={s.root}>
      <Link href="/cases">Our work</Link>
      <Link href="#">What we do</Link>
      <Link href="/about">About us</Link>
      {/* <a href="#">Blog</a> */}
    </div>
  )
}