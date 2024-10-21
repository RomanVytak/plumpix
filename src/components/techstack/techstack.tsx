import Image from 'next/image'
import s from './techstack.module.scss'

const temp = [
  {
    icon: '/icons/techstack/react.svg',
    name: 'React',
  },
  {
    icon: '/icons/techstack/next.svg',
    name: 'Next.js',
  },
  {
    icon: '/icons/techstack/typescript.svg',
    name: 'TypeScript',
  },
  {
    icon: '/icons/techstack/node.svg',
    name: 'Node.js',
  },
  {
    icon: '/icons/techstack/angular.svg',
    name: 'Angular',
  },
  {
    icon: '/icons/techstack/vue.svg',
    name: 'Vue',
  },
  {
    icon: '/icons/techstack/python.svg',
    name: 'Python',
  },
  {
    icon: '/icons/techstack/aws.svg',
    name: 'AWS',
  },
  {
    icon: '/icons/techstack/gcp.svg',
    name: 'GCP',
  },
  {
    icon: '/icons/techstack/azure.svg',
    name: 'Azure',
  },
  {
    icon: '/icons/techstack/wordpress.svg',
    name: 'WordPress',
  },
  {
    icon: '/icons/techstack/laravel.svg',
    name: 'Laravel',
  },
  {
    icon: '/icons/techstack/symphony.svg',
    name: 'Symphony',
  },
  {
    icon: '/icons/techstack/net.svg',
    name: '.NET',
  },
]

export const TechStack = () => {
  return (
    <div className={s.root}>
      <h2>{`Our Tech stack includes`}</h2>
      <div className={s.items}>
        {temp.map((t) => {
          return (
            <div key={t.name} className={s.item}>
              <Image src={t.icon} alt={t.name} width={30} height={30} />
              <span>{t.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
