import css from './header.module.scss'
import { Menu } from '../menu/menu'
import Link from 'next/link'
import { PlumpixLogo } from '../../components/logo/logo'
import { MyLink } from '../../components/link/link'
import { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimationContext } from '../../context/animation'

export const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const path = usePathname()
  const animation = useContext(AnimationContext);

  const isScrollTop = animation.isScrollTop;

  useEffect(() => {
    setOpenMenu(false)
    return () => { }
  }, [isScrollTop, path])

  return (
    <header className={css.header}
      {...isScrollTop ? { 'data-hide': 'true' } : {}}
      {...isOpenMenu ? { 'data-open': 'true' } : {}}
    >
      <div className={`wrapper ${css.wrapper}`}>
        <Link href={'/'} className={`${css.logo} site-logo`} aria-label='Plumpix Logo' data-child>
          <PlumpixLogo />
        </Link>
        <button onClick={() => setOpenMenu(!isOpenMenu)} className={css.burger} data-child>
          <span />
          <span className={css.s} />
          <span />
        </button>
        <Menu subDeps={[path, isOpenMenu]} />
        <div data-child>
          <MyLink href={'/contacts'} title='Contact us'>Contact us</MyLink>
        </div>
      </div>
    </header>
  )
}
