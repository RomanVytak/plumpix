import { Swiper, SwiperSlide } from 'swiper/react'
import s from './slider.module.scss'
import glp from '../../../styles/pagination.module.scss'
import 'swiper/css'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import clsx from 'clsx'

export const Slider = ({ data }: { data: string[] }) => {
  return (
    <div className={s.root}>
      <Swiper
        className={s.slider}
        modules={[Pagination]}
        pagination={{
          el: '#pagination',
          type: 'bullets',
          bulletActiveClass: `${glp.active}`,
        }}
      >
        {data.map((t) => {
          return (
            <SwiperSlide key={t} className={s.slide}>
              <Image src={t} alt='case image' width={1240} height={434} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div id="pagination" className={clsx(glp.pagination, glp.invert)} />
    </div>
  )
}