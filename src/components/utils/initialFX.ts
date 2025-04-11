import { gsap } from "gsap";

const splitTextIntoChars = (element: Element): HTMLElement[] => {
  const text = element.textContent || '';
  element.textContent = '';
  
  return text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    element.appendChild(span);
    return span;
  });
};

export const initialFX = () => {
  const tl = gsap.timeline();
  const titleElement = document.querySelector(".landing-title");
  
  if (titleElement) {
    const chars = splitTextIntoChars(titleElement);

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
  }
};
