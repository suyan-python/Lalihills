import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) return undefined;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.9,
    });

    let frameId;
    const animate = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
