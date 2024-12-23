import Image from 'next/image'
import s from './header.module.scss'
import { Button } from '../../components/button/button'
import { Menu } from '../menu/menu'
import Link from 'next/link'
import clsx from 'clsx'
import { EScrollDirection, useGetScrollPosition } from '../../hooks'

export const Header = () => {
  const scrollDirection = useGetScrollPosition();

  return (
    <header className={clsx(s.root, {
      [s.hide]: scrollDirection === EScrollDirection.DOWN
    })}>
      <div className={s.wrap}>
        <Link href={'/'} className={s.logo}>
          <Image src={'/img/logo.svg'} alt='PlumPix' width={140} height={26} />
        </Link>
        <Menu />
        <Button href={'/contacts'}>Contact us</Button>
      </div>
    </header>
  )
}