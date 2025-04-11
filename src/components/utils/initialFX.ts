import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { smoother } from "../Navbar";

gsap.registerPlugin(SplitText);

export const initialFX = () => {
  const tl = gsap.timeline();
  const splitText = new SplitText(".landing-title", { type: "chars" });
  const chars = splitText.chars;

  tl.from(chars, {
    y: 100,
    opacity: 0,
    rotateX: -90,
    stagger: 0.02,
    duration: 1,
    ease: "power4.out",
  })
    .from(
      ".landing-para",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    )
    .from(
      ".landing-circle1",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=1"
    )
    .from(
      ".landing-circle2",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.8"
    );

  smoother?.effects(".landing-circle1", { speed: 0.8 });
  smoother?.effects(".landing-circle2", { speed: 1.2 });
};
