import Image from 'next/image'
import s from './header.module.scss'
import { Button } from '../../components/button/button'

export const Header = () => {
  return (
    <header className={s.root}>
      <Image src={'/img/logo.png'} alt='PlumPix' width={111} height={33} className={s.logo} />
      <div className={s.menu}>
        <a href="#">Our work</a>
        <a href="#">What we do</a>
        <a href="#">About us</a>
        <a href="#">Blog</a>
      </div>
      <Button href={'/contacts'}>Contact us</Button>
    </header>
  )
}