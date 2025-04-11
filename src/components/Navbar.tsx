import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Initialize smooth scrolling
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target);
      if (!element) return;
      
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;
      
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const ease = (t: number) => t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        window.scrollTo(0, startPosition + distance * ease(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    };

    // Set up click handlers for navigation links
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("href");
          if (section) {
            smoothScroll(section);
          }
        }
      });
    });

    // Refresh ScrollTrigger on resize
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-flex">
          <div className="nav-logo">
            <h2>Aarambh</h2>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#about">
                  <HoverLinks text="ABOUT" />
                </a>
              </li>
              <li>
                <a href="#work">
                  <HoverLinks text="WORK" />
                </a>
              </li>
              <li>
                <a href="#contact">
                  <HoverLinks text="CONTACT" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
