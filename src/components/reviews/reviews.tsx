import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import s from './reviews.module.scss'
import glp from '../../styles/pagination.module.scss'
import Image from 'next/image'
import { Button } from '../button/button'

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
    <div className={s.root}>
      <div className={s.wrap}>
        <h2>{`What our clients say about PlumPix`}</h2>

        <div className={s.slider}>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: '#pagination',
              type: 'bullets',
              bulletActiveClass: `${glp.active}`,
            }}
            slidesPerView={1.2}
            spaceBetween={12}
            breakpoints={{
              801: {
                slidesPerView: 2,
              },
              1101: {
                slidesPerView: 3,
              }
            }}
          >
            {temp.map((t) => {
              return (
                <SwiperSlide
                  key={t.name}
                  className={s.slide}
                >
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
                    <a className={s.site} href='#' target='_blank'>site here?</a>
                    <Button href="#" str={true} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div id="pagination" className={glp.pagination} />
        </div>
      </div>
    </div>
  )
}
