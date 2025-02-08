import clsx from 'clsx'
import css from './techstackItem.module.scss'
import Image from 'next/image'

type TechstackItemProps = {
  name: string
  icon: string
  variant?: 'small'
}

export const TechstackItem = ({ name, icon, variant }: TechstackItemProps) => {
  return (
    <div className={clsx(css.root, 'font_18_reg', {
      [css.small]: variant === 'small'
    })}>
      <Image src={icon} alt={name} width={30} height={30} />
      <p>{name}</p>
    </div>
  )
}
