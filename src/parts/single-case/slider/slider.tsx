import { Swiper, SwiperSlide } from 'swiper/react'
import s from './slider.module.scss'
import 'swiper/css'
import Image from 'next/image'
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'

export const Slider = ({ data }: { data: string[] }) => {
  return (
    <section className={s.root}>
      <div className={`wrapper md`} data-fade>
        <Swiper
          className={s.slider}
          modules={[Pagination, Mousewheel, Autoplay]}
          spaceBetween={16}
          mousewheel={{ forceToAxis: true }}
          pagination={{ el: '#data-pagination', clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {data.map((t) =>
            <SwiperSlide key={t} className={s.slide}>
              <Image src={t} alt='case image' width={1240} height={434} />
            </SwiperSlide>
          )}
        </Swiper>
        <div id="data-pagination" className={'swiper-pagination dark'} />
      </div>
    </section>
  )
}