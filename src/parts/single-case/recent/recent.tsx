import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import s from './recent.module.scss'
import Image from 'next/image'
import { MyLink } from '../../../components/link/link'
import { CasesProps } from '../../../types'

export const Recent = ({ data }: { data: CasesProps }) => {

  if (!data.length) {
    return null;
  }

  return (
    <section className={s.root}>
      <div className="wrapper md">
        <h2 data-fade>{`More of recent case studie`}</h2>

        <div className={s.slider}>
          <Swiper
            modules={[Pagination, Mousewheel]}
            pagination={{
              el: '#pagination',
              clickable: true
            }}
            className={s.swiper}
            slidesPerView={1}
            spaceBetween={16}
            data-children data-fade
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              769: { slidesPerView: 2 },
              1024: { slidesPerView: 3, }
            }}
          >
            {data.map((t) => {
              return (
                <SwiperSlide key={t.slug} className={s.slide} data-child>
                  <div className={s.image}>
                    <Image src={t.home.image} alt={t.home.name} width={400} height={400} />
                  </div>

                  <div className={s.content}>
                    <div className={`${s.tags} font_18`}>
                      {t.home.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <h3 className={s.title}>{t.home.name}</h3>
                    <p>{t.about}</p>
                    <div className={s.buttons}>
                      <MyLink href={t.slug} title='Learn more' size='medium' icon={true} type='stroke'>Learn more</MyLink>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div id="pagination" className={'swiper-pagination dark'} />
        </div>
      </div>
    </section>
  )
}
