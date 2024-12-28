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
  const [isDown, setDirection] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false)


  useEffect(() => {
    let st = null;

    const rs = new ResizeObserver(() => ScrollTrigger.refresh());

    setTimeout(() => {
      st = ScrollTrigger.create({
        onUpdate: self => {
          // console.log(self.direction);
          setDirection(self.direction === 1)
        }
      });
    }, 1000)
    rs.observe(document.body);
    return () => {
      rs.disconnect();
      st && st.kill();
    }
  }, [])

  useEffect(() => {
    setOpenMenu(false)
    return () => { }
  }, [isDown])


  return (
    <header className={css.header}
      {...isDown ? { 'data-hide': 'true' } : {}}
      {...isOpenMenu ? { 'data-open': 'true' } : {}}
    >
      <div className={`wrapper ${css.wrapper}`}>
        <Link href={'/'} className={`site-logo`} aria-label='Plumpix Logo'>
          <PlumpixLogo />
        </Link>
        <button onClick={() => setOpenMenu(!isOpenMenu)} className={css.burger}>
          <span></span>
          <span className={css.s} ></span>
          <span></span>
        </button>
        <Menu />
        <MyLink href={'/contacts'} title='Contact us'>Contact us</MyLink>
      </div>
    </header>
  )
}