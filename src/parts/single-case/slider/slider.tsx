import { Swiper, SwiperSlide } from 'swiper/react'
import s from './slider.module.scss'
import 'swiper/css'
import Image from 'next/image'
import { Mousewheel, Pagination } from 'swiper/modules'

export const Slider = ({ data }: { data: string[] }) => {
  return (
    <section className={s.root}>
      <div className={`wrapper md ${s.wrapper}`}>
        <Swiper
          className={s.slider}
          modules={[Pagination, Mousewheel]}
          spaceBetween={16}
          mousewheel={{ forceToAxis: true }}
          pagination={{ el: '#pagination', clickable: true }}

        >
          {data.map((t) =>
            <SwiperSlide key={t} className={s.slide}>
              <Image src={t} alt='case image' width={1240} height={434} />
            </SwiperSlide>
          )}
        </Swiper>
        <div id="pagination" className={'swiper-pagination dark'} />
      </div>
    </section>
  )
}