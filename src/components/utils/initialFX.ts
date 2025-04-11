import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { smoother } from "../Navbar";

gsap.registerPlugin(SplitText);

export const initialFX = () => {
  const tl = gsap.timeline();
  
  // Check if elements exist before animating
  const landingTitle = document.querySelector(".landing-title");
  const landingPara = document.querySelector(".landing-para");
  const landingCircle1 = document.querySelector(".landing-circle1");
  const landingCircle2 = document.querySelector(".landing-circle2");

  if (landingTitle) {
    const splitText = new SplitText(".landing-title", { type: "chars" });
    const chars = splitText.chars;

    tl.from(chars, {
      y: 100,
      opacity: 0,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
    });
  }

  if (landingPara) {
    tl.from(
      ".landing-para",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.5"
    );
  }

  if (landingCircle1) {
    tl.from(
      ".landing-circle1",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=1"
    );
  }

  if (landingCircle2) {
    tl.from(
      ".landing-circle2",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.8"
    );
  }

  if (smoother) {
    if (landingCircle1) {
      smoother.effects(".landing-circle1", { speed: 0.8 });
    }
    if (landingCircle2) {
      smoother.effects(".landing-circle2", { speed: 1.2 });
    }
  }
};
