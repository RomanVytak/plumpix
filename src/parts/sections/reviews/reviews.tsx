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
    text: 'Collaborating with Plumpix has been an exceptional experience. Their team combines expertise, innovation, and professionalism, ensuring a seamless and efficient process from start to finish. Their proactive approach, clear communication, and commitment to quality set them apart. We look forward to working together again',
    site: 'enjoy.ua',
    link: 'https://enjoy.ua/',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Pop',
    position: 'SEO',
    text: 'We sincerely thank Plumpix for developing our e-commerce website and booking app from scratch. They understood our vision, proposed smart solutions, and delivered a fast, efficient, and user-friendly platform. Their professionalism, creativity, and clear communication made the process seamless. Highly recommended!',
    site: 'faceandskin.com.ua',
    link: 'https://faceandskin.com.ua/',
  },
  {
    image: '/img/review/sophia.png',
    name: 'Sofia Map',
    position: 'SEO',
    text: 'Blown away by Plumpix’s work on our e-learning platform! They delivered a sleek, interactive, and user-friendly system that makes learning a breeze. Their team brought fresh ideas, nailed the technical side, and kept everything smooth from start to finish. Great communication, on-time delivery, and a platform that stands out – couldn’t ask for more',
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
