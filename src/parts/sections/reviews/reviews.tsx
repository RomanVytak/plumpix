import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import s from './reviews.module.scss'
import Image from 'next/image'
import { MyLink } from '../../../components/link/link'

const temp = [
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Pop',
    position: 'SEO',
    text: 'Communication has been impeccable, and we view our relationship as a true partnership where Binary Studio has provided valuable insights that go beyond the checkbox of development.',
    site: 'ccoomms.com',
    link: '#',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Map',
    position: 'SEO',
    text: 'Communication has been impeccable, and we view our relationship as a true partnership where Binary Studio has provided valuable insights that go beyond the checkbox of development.',
    site: 'ccoomms.com',
    link: '#',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Doop',
    position: 'SEO',
    text: 'Communication has been impeccable, and we view our relationship as a true partnership where Binary Studio has provided valuable insights that go beyond the checkbox of development.',
    site: 'ccoomms.com',
    link: '#',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Nyt',
    position: 'SEO',
    text: 'Communication has been impeccable, and we view our relationship as a true partnership where Binary Studio has provided valuable insights that go beyond the checkbox of development.',
    site: 'ccoomms.com',
    link: '#',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Rop',
    position: 'SEO',
    text: 'Communication has been impeccable, and we view our relationship as a true partnership where Binary Studio has provided valuable insights that go beyond the checkbox of development.',
    site: 'ccoomms.com',
    link: '#',
  },
]

export const Reviews = () => {
  return (
    <section className={s.root}>
      <div className="wrapper">
        <div className={s.wrap}>
          <h2 data-fade>{`What our clients say about PlumPix`}</h2>

          <div className={s.slider} >
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
              {temp.map((t) => {
                return (
                  <SwiperSlide key={t.name} className={s.slide} data-child>
                    <div className={s.info}>
                      <Image src={t.image} alt={t.name} width={100} height={100} />
                      <div className={s.nameWrap}>
                        <h3 className={s.name}>{t.name}</h3>
                        <p className={s.position}>{t.position}</p>
                      </div>
                    </div>
                    <p className={s.text}>
                      <Image src="/icons/quote.svg" alt="quote icon" width={18} height={15} />
                      {t.text}
                    </p>
                    <div className={s.buttons}>
                      <div className={s.links}>
                        <a className={s.site} href='#' target='_blank'>site here?</a>
                        <MyLink href="#" title='Read more' onlyIcon={true} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div id="pagination" className={'swiper-pagination'} />
          </div>
        </div>
      </div>

    </section >
  )
}
