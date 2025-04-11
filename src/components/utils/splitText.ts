import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitTextIntoLines = (element: HTMLElement): HTMLElement[] => {
  const text = element.innerHTML;
  element.innerHTML = '';
  
  const words = text.trim().split(/\s+/);
  const lines: HTMLElement[] = [];
  let currentLine = document.createElement('span');
  currentLine.classList.add('split-line');
  
  words.forEach((word) => {
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.innerHTML = word + ' ';
    currentLine.appendChild(wordSpan);
    
    if (currentLine.offsetWidth > element.offsetWidth) {
      currentLine.removeChild(wordSpan);
      lines.push(currentLine);
      currentLine = document.createElement('span');
      currentLine.classList.add('split-line');
      currentLine.appendChild(wordSpan);
    }
  });
  
  if (currentLine.hasChildNodes()) {
    lines.push(currentLine);
  }
  
  lines.forEach(line => element.appendChild(line));
  return lines;
};

export const splitText = () => {
  const paras = gsap.utils.toArray<HTMLElement>(".para");

  paras.forEach((para) => {
    const lines = splitTextIntoLines(para);

    gsap.from(lines, {
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
