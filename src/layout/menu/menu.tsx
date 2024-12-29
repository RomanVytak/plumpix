import Link from 'next/link'
import { useEffect, useState } from 'react'

const dataMenu = [
  {
    title: 'Our work',
    link: '/cases'
  },
  {
    title: 'What we do',
    link: null,
    sub: [
      {
        title: 'Custom Software Development',
        link: '/custom-software-development'
      },
      {
        title: 'Build Dedicated Development Team',
        link: '/dedicated-team'
      }
    ]
  },
  {
    title: 'About us',
    link: '/about'
  }

]

export const Menu = ({ showSubPages = true, subDeps = [] }) => {
  const [openSub, setOpenSub] = useState(false)

  useEffect(() => {
    setOpenSub(false)
    return () => { }
  }, [...subDeps])

  return (
    <menu {...( showSubPages ? { 'data-child': 'true' } : {})} >
      <ul>
        {
          dataMenu.map((t) => {

            if (!t.link && !showSubPages) return null
            return (
              <li key={t.title}
                {...(t.sub && showSubPages ? { 'data-has-sub': 'true' } : {})}
                {...(t.sub && openSub ? { 'data-open': 'true' } : {})}

              >
                {
                  t.link ?
                    <Link href={t.link} data-page>{t.title}</Link> :
                    <button data-page onClick={() => setOpenSub(!openSub)} >{t.title}</button>
                }

                {t.sub && showSubPages && (
                  <div data-sub-menu>

                    <ul data-sub >
                      {t.sub.map((sub) => {
                        return (
                          <li key={sub.title}>
                            <Link href={sub.link} data-subpage>{sub.title}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </li>
            )
          })
        }
      </ul>
    </menu>
  )
}
