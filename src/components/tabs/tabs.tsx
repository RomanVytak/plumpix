import s from './tabs.module.scss'

const temp = [
  {
    id: 1,
    tab: 'Discovery Phase',
    name: 'What is Discovery Phase',
    text: 'The first stage of creating a web application is the which may have multiple levels and different scenarios depending on your project. For clients who build every feature by themselves from scratch, our job is to analyze the overall project in light of your future goals.   In another scenario, we dedicate a team to analyzing your infrastructure, the architecture of your app, your code, and your deployment approach. During this phase, we create a roadmap that serves as a guide for future goals.',
  },
  {
    id: 2,
    tab: 'Themselves from scratch',
    name: 'Job is to analyze the overall',
    text: 'The first stage of creating a web application is the which may have multiple levels and different scenarios depending on your project. For clients who build every feature by themselves from scratch',
  },
  {
    id: 3,
    tab: 'In another scenario',
    name: 'The first stage of creating',
    text: 'Job is to analyze the overall project in light of your future goals.   In another scenario, we dedicate a team to analyzing your infrastructure, the architecture of your app, your code, and your deployment approach. During this phase, we create a roadmap that serves as a guide for future goals.',
  },
]

export const Tabs = ({ title }: { title?: string }) => {
  return (
    <div className={s.root}>
      {title && <h2>{title}</h2>}
      <div className={s.wrap}>
        <div className={s.tabs}>
          {temp.map((t) => {
            return (
              <div className={s.tab}>{t.tab}</div>
            )
          })}
        </div>
        <div className={s.content}>
          {temp.map((t) => {
            return (
              <div>
                <h3>{t.name}</h3>
                <p>{t.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
