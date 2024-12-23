import Link from 'next/link'
import s from './menu.module.scss'

export const Menu = () => {
  return (
    <div className={s.root}>
      <ul>
        <li>
          <Link href="/cases">Our work</Link>
        </li>
        <li>
          <Link href="#">What we do</Link>
          <ul className={s.sub}>
            <li><Link href="/custom-software-development">Custom Software Development</Link></li>
            <li><Link href="/dedicated-team">Build Dedicated Development Team</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
      </ul>
    </div>
  )
}
