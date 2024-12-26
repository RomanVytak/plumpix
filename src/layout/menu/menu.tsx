import Link from 'next/link'

const dataMenu = [
  {
    title: 'Our work',
    link: '/cases'
  },
  {
    title: 'What we do',
    link: '#',
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

export const Menu = ({ showSubPages = true }) => {
  return (
    <menu >
      <ul>
        {
          dataMenu.map((t) => {
            return (
              <li key={t.title}
                {...(t.sub && showSubPages ? { 'data-has-sub': 'true' } : {})}
              >
                <Link href={t.link} data-page>{t.title}</Link>
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
