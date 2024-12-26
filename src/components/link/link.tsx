import Link from 'next/link'
import css from './link.module.scss'
import clsx from 'clsx'

type ButtonProps = {
  children?: string
  href: string
  title: string
  size?: 'big' | 'medium'
  type?: 'color' | 'stroke'
  icon?: boolean
}

export const MyLink = ({ children, href, type = 'color', size = 'big', icon, title }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(css.link, css[type], css[size])}
      aria-label={title}
    >
      {children}
      {icon && <div className='mask_arrow' data-arrow aria-hidden='true'></div>}
    </Link>
  )
}
