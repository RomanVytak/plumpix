import Link from 'next/link'
import { useEffect, useState } from 'react'

const dataMenu = [
  {
    title: 'Our work',
    link: '/cases',
    location: ['header', 'footer'],
  },
  {
    title: 'What we do',
    link: null,
    location: ['header'],
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
    link: '/about',
    location: ['header', 'footer'],
  },
  {
    title: 'Contacts',
    link: '/contacts',
    location: ['footer'],
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    location: ['footer'],
  }
]

export const Menu = ({
  showSubPages = true,
  subDeps = [],
  location
}) => {
  const [openSub, setOpenSub] = useState(false)

  useEffect(() => {
    setOpenSub(false)
    return () => { }
  }, [...subDeps])

  return (
    <menu {...(showSubPages ? { 'data-child': 'true' } : {})}>
      <ul>
        {dataMenu.map((t) => {
          if (!t.location.includes(location)) {
            return null;
          }

          return (
            <li
              key={t.title}
              {...(t.sub && showSubPages ? { 'data-has-sub': 'true' } : {})}
              {...(t.sub && openSub ? { 'data-open': 'true' } : {})}
            >

              {t.link ? (
                <Link href={t.link} data-page>{t.title}</Link>
              ) : (
                <button data-page onClick={() => setOpenSub(!openSub)}>{t.title}</button>
              )}

              {t.sub && showSubPages && (
                <div data-sub-menu>
                  <ul data-sub>
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
        })}
      </ul>
    </menu>
  )
}
