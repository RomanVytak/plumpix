import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
// import SmoothScrolling from '../components/lenis/SmoothScrolling';

import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);


export type AnimationProps = {
  isScrollTop: boolean;
  isMobile: boolean;
};

export const AnimationContext = createContext<AnimationProps>({
  isScrollTop: true,
  isMobile: false
});


export const Animation = ({ children }) => {
  const path = usePathname()

  const [isScrollTop, setDirection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkScrollDirection = () => {
    const header = document.querySelector('header');
    const scr = ScrollTrigger.create({ onUpdate: self => setDirection(self.direction === 1), });

    if (header) {
      const fades = header.querySelectorAll("[data-child]") as NodeListOf<HTMLDivElement>;
      const tl = gsap.timeline({ defaults: { ease: "power2.out", }, });

      scr.disable()

      tl.fromTo(fades,
        { y: "-20px", opacity: 0, },
        { duration: 0.5, y: 0, opacity: 1, stagger: 0.075, }
      ).then(e => {
        fades.forEach(f => f.removeAttribute("data-child"))
        tl.revert().kill()
        scr.enable()
      })


    }
    return scr

  }

  useEffect(() => {
    let tls: any[] = [];

    const initAnimaton = () => {
      const section = document.body;
      const fades = section.querySelectorAll("[data-fade]") as NodeListOf<HTMLDivElement>;
      const counts = section.querySelectorAll("[data-count]") as NodeListOf<HTMLDivElement>;

      // Fade elements
      const animateFades = (trigger: HTMLDivElement) => {
        const { y, children, fade } = trigger.dataset;
        let fadeElement: any = trigger;

        if (children) {
          let child = trigger.querySelectorAll('[data-child]')
          fadeElement = child.length ? child : trigger.children;
        }

        let tl = gsap.timeline({
          defaults: { ease: "power2.out", },
          scrollTrigger: {
            trigger,
            start: () => fade == "in" ? "top 98%" : "top 95%",
            // toggleActions: "play none none reverse",
          },
        });

        switch (fade) {
          case "in":
            tl.fromTo(fadeElement,
              { opacity: 0, },
              { duration: 1, opacity: 1, stagger: 0.05, }
            );
            break;
          default:
            tl.fromTo(fadeElement,
              { ...(y ? { y } : { y: "20px" }), opacity: 0, },
              { duration: 0.6, y: 0, opacity: 1, stagger: 0.075, }
            );
            break;
        }
        tls.push(tl);

      };

      // Count elements
      const animateCount = (trigger: HTMLDivElement) => {
        const { count } = trigger.dataset;
        let tl = gsap.timeline({
          defaults: { duration: 2, textContent: count, ease: "power2.out", },
          scrollTrigger: {
            trigger,
            start: () => "top 102%",
          },
        });
        tl.to(trigger, { snap: { textContent: 1 }, }, 0)

        tl.then(() => tl.kill()
        )
      };

      counts.forEach(animateCount)

      fades.forEach(animateFades)
    }

    initAnimaton()
    return () => {
      tls.forEach(tl => tl && tl.revert().kill());
    }
  }, [path])

  // check is mobile & checkScrollDirection
  useEffect(() => {
    const mm = gsap.matchMedia();
    const dir = checkScrollDirection();
    const rs = new ResizeObserver(() => ScrollTrigger.refresh());

    mm.add("(min-width: 769px)", () => setIsMobile(false));
    mm.add("(max-width: 768px)", () => setIsMobile(true));

    rs.observe(document.body);


    return () => {
      rs.disconnect();
      mm.kill();
      dir.kill();
    }
  }, [])

  return (
    <>
      <AnimationContext.Provider value={{ isScrollTop, isMobile }}>
        {/* <SmoothScrolling> */}
        {children}
        {/* </SmoothScrolling> */}
      </AnimationContext.Provider>
    </>
  )
};
