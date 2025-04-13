import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hey! I'm</h2>
            <h1>
              AARAMBH
            </h1>
          </div>
          <div className="landing-info">
            <h3>I'm a</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">🧠 AI Wizard</div>
              <div className="landing-h2-2">🚀 Builder</div>
            </h2>
            <h2>
              <div className="landing-h2-info">🎮 Gamer</div>
              <div className="landing-h2-info-1">💻 Full Stack</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
