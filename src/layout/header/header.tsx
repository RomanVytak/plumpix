import Image from 'next/image'
import s from './header.module.scss'
import { Button } from '../../components/button/button'
import { Menu } from '../menu/menu'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={s.root}>
      <Link href={'/'} className={s.logo}>
        <Image src={'/img/logo.png'} alt='PlumPix' width={111} height={33} />
      </Link>
      <Menu />
      <Button href={'/contacts'}>Contact us</Button>
    </header>
  )
}