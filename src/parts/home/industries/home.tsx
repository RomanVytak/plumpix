import { Button } from "../../../components/button/button"
import s from './home.module.scss'

export const HomeStep = () => {
  return (
    <div className={s.root}>
      <h1>{`Custom Software Product Development Company`}</h1>
      <p>{`At TechMagic, we take responsibility for your next software product, from inception 
      and design to engineering and support. Starting from any step.`}</p>
      <Button href="#">{`Start with a free consultation`}</Button>
    </div>
  )
}