import css from './content.module.scss'
import { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AnimationContext } from '../../../context/animation';
import { CaseProps } from '../../../types';
import { TechstackItem } from '../../../components/techstackItem/techstackItem';
gsap.registerPlugin(ScrollTrigger);

const content = [
  { key: "about", },
  { key: "сhallenge", },
  { key: "content", title: "The process", }
]

export const Content = ({ data, title }: { data: string, title?: string }) => {
  return (
    <div className={css.content}>
      {title && <h2 className={css.title}>{title}</h2>}
      <div className={css.content_row}>
        <div className={css.content_row_wrap} dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </div>
  )
}

export const CaseContent = ({ data }: { data: CaseProps }) => {
  const sidebarRef = useRef();
  const contentRef = useRef();
  const animation = useContext(AnimationContext);
  const isMobile = animation.isMobile;

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: sidebarRef.current,
      start: `top 10px`,
      end: "bottom+=10px bottom",
      endTrigger: contentRef.current,
      pin: true,
      // invalidateOnRefresh: true,
      // markers: true
    });

    return () => {
      trigger && trigger.kill();
    }
  }, [isMobile]);

  return (
    <section className={css.root}>
      <div className={`wrapper md ${css.wrapper}`}>
        <div className={`wrapper-grid ${css.root_grid}`}>

          <div className={css.root_left_col}>
            <div className={css.information} ref={sidebarRef}>
              <div className={css.col}>
                <h2 className="font_28">{`Product Team`}</h2>
                <div className={css.list}>
                  {data.team.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
                <div className={css.duration}>
                  <p>{`Duration:`} {data.duration}</p>
                </div>
              </div>
              <div className={css.line}></div>
              <div className={css.col}>
                <h2 className="font_28">{`Technologies`}</h2>
                <div className={css.tech}>
                  {data.technologies.map((item) => (
                    <TechstackItem key={item.name} icon={item.icon} name={item.name} variant="small" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={css.root_right_col} ref={contentRef} data-fade data-children>
            {content.map((item) => (
              <Content key={item.key} data={data[item.key]} title={item.title} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}