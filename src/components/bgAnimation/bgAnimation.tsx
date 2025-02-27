import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import css from './bgAnimation.module.scss';
import clsx from "clsx";

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.fog.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.VANTA && !vantaEffect && vantaRef.current) {
        setVantaEffect(
          // @ts-ignore
          window.VANTA.FOG({
            el: vantaRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerHeight,

            highlightColor: 0xa75eef,
            midtoneColor: 0xf182c7,
            lowlightColor: 0x727dd7,
            baseColor: 0xffffff,

            blurFactor: 1,
            speed: 2.1,
            zoom: 0.9,
            THREE: THREE,
          })
        );
      }

      setIsVisible(true);
    };

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      document.body.removeChild(script);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className={clsx(css.root, {
        [css.show]: isVisible
      })}
    >
      <div className={css.blur} />
    </div>
  );
};

export default VantaBackground;
