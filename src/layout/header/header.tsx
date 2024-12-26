import Image from 'next/image'
import css from './header.module.scss'
import { Button } from '../../components/button/button'
import { Menu } from '../menu/menu'
import Link from 'next/link'
import clsx from 'clsx'
import { EScrollDirection, useGetScrollPosition } from '../../hooks'
import { PlumpixLogo } from '../../components/logo/logo'
import { MyLink } from '../../components/link/link'

export const Header = () => {
  const scrollDirection = useGetScrollPosition();

  const prevClass = clsx(css.root, {
    [css.hide]: scrollDirection === EScrollDirection.DOWN
  })

  return (
    <header className={css.header}>
      <div className={`wrapper ${css.wrapper}`}>
        <Link href={'/'} className={`site-logo`} aria-label='Plumpix Logo'>
          <PlumpixLogo />
        </Link>
        <Menu />
        <MyLink href={'/contacts'} title='Contact us'>Contact us</MyLink>
      </div>
    </header>
  )
}