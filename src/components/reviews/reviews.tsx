import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import s from './reviews.module.scss'
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
        <h2>What our clients say about PlumPix</h2>

        <div className={s.slider}>
          <Swiper
            slidesPerView={3}
            spaceBetween={12}
          >
            {temp.map((t) => {
              return (
                <SwiperSlide key={t.name} className={s.slide}>
                  <div className={s.info}>
                    <Image src={t.image} alt={t.name} width={100} height={100} />
                    <div className={s.wrap}>
                      <p className={s.name}>{t.name}</p>
                      <p className={s.position}>{t.position}</p>
                    </div>
                  </div>
                  <div className={s.text}>{t.text}</div>
                  <div className={s.buttons}>
                    <a className={s.site} href='#' target='_blank'>site here?</a>
                    <Button href="#" />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
