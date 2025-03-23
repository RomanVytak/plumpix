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
    text: 'Plumpix approaches the project as if it were their own - dedicated and passionate. Their expertise, innovative mindset, and attention to detail ensured a smooth and efficient process. They are proactive, reliable, and always fully committed to delivering top-notch results.',
    site: 'enjoy.ua',
    link: 'https://enjoy.ua/',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Pop',
    position: 'SEO',
    text: 'Huge thanks to Plumpix for their exceptional partnership! They grasped our needs, provided intelligent solutions, and built a fast, efficient, and intuitive system. Their professionalism, creativity, and transparent communication made the entire journey stress-free.',
    site: 'faceandskin.com.ua',
    link: 'https://faceandskin.com.ua/',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Map',
    position: 'SEO',
    text: 'Plumpix is always responsive and quick to act on any ideas. They crafted a modern, interactive, and highly functional solution that’s a pleasure to use. Their team brought fresh ideas, executed everything flawlessly, and ensured a smooth process from start to finish.',
    site: 'abacusarithmetic.com',
    link: 'https://info.abacusarithmetic.com/',
  },
]

export const Reviews = () => {
  return (
    <section className={s.root}>
      <div className="wrapper">
        <div className={s.wrap}>
          <h2 data-fade dangerouslySetInnerHTML={{ __html: 'What our clients<br>say about PlumPix' }} />
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
              {temp.map((t, index) => {
                return (
                  <SwiperSlide key={t.name + index} className={s.slide} data-child>
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
                        <a className={s.site} href={t.link} target='_blank'>{t.site}</a>
                        <MyLink href={t.link} title='Read more' onlyIcon={true} type='white' target="_blank" />
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
    </section>
  )
}
