import css from './header.module.scss'
import { Menu } from '../menu/menu'
import Link from 'next/link'
// import clsx from 'clsx'
// import { EScrollDirection, useGetScrollPosition } from '../../hooks'
import { PlumpixLogo } from '../../components/logo/logo'
import { MyLink } from '../../components/link/link'
import { useEffect, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export const Header = () => {
  const [isDown, setDirection] = useState(false)

  useEffect(() => {
    let st = null;

    setTimeout(() => {
      st = ScrollTrigger.create({
        onUpdate: self => setDirection(self.direction === 1)
      });
    }, 1000)

    return () => {
      st && st.kill();
    }
  }, [])

  return (
    <header className={css.header} {...isDown ? { 'data-hide': 'true' } : {}}>
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