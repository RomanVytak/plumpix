import s from './button.module.scss'

export const Button = ({ children, href }: { children?: string, href: string }) => {
  return (
    <a href={href} className={s.root}>{children || ''}</a>
  )
}
