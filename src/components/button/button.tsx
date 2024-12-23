import Link from 'next/link'
import s from './button.module.scss'
import clsx from 'clsx'
import { StrR } from '../../icons'

type ButtonProps = {
  children?: string
  href: string
  type?: 'big'
  str?: boolean
}

export const Button = ({ children, href, type, str }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(s.root, {
        [s.big]: type === 'big',
        [s.circle]: !children
      })}
    >
      {children || ''}
      {str && <StrR />}
    </Link>
  )
}
