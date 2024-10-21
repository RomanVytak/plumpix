import Link from 'next/link'
import s from './button.module.scss'

export const Button = ({ children, href }: { children?: string, href: string }) => {
  return (
    <Link href={href} className={s.root}>{children || ''}</Link>
  )
}
