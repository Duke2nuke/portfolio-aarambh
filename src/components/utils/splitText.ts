import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

interface ParaElement extends HTMLElement {
  split: SplitText;
}

export const splitText = () => {
  const paras = gsap.utils.toArray<ParaElement>(".para");

  paras.forEach((para) => {
    para.split = new SplitText(para, {
      type: "lines",
      linesClass: "split-line",
    });

    gsap.from(para.split.lines, {
      scrollTrigger: {
        trigger: para,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        markers: false,
      },
      duration: 1,
      stagger: 0.1,
      y: 200,
      opacity: 0,
      ease: "power3.out",
    });
  });
};
