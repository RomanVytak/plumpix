import css from './content.module.scss'
import { CaseProps } from "../../../pages/cases/_/types"
import { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AnimationContext } from '../../../context/animation';
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
      <div
        className={css.content_row}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </div>
  )
}

export const CaseContent = ({ data }: { data: CaseProps }) => {
  const sidebarRef = useRef();
  const contentRef = useRef();
  const animation = useContext(AnimationContext);
  const isMobile = animation.isMobile;
  
  useEffect(() => {

    if (isMobile) return;

    const header = document.querySelector('header');
    const trigger = ScrollTrigger.create({
      trigger: sidebarRef.current,
      start: `top 10px`,
      end: "bottom bottom",
      endTrigger: contentRef.current,
      pin: true,
      // invalidateOnRefresh: true,
      markers: true
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
                <h2 className="font_28">Product Team</h2>
                <div className={css.list}>
                  {data.team.map((item) => (
                    <p key={item} >{item}</p>
                  ))}
                </div>

                <div className={css.duration}>
                  <p>Duration: {data.duration}</p>
                </div>
              </div>

              <div className={css.line}></div>

              <div className={css.col}>
                <h2 className="font_28">Technologies</h2>

                <div className={css.tech}>
                  {
                    data.technologies.map((item) => (
                      <div className={css.tech_item} key={item.name}>
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    ))
                  }
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