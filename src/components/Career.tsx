import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Intern</h4>
                <h5>DevCompany</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on modern web applications using React and Tailwind CSS. 
              Developed responsive user interfaces and implemented complex UI components.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Developer</h4>
                <h5>Tomatina</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built an AI-powered agri-marketplace startup that connects farmers directly with buyers.
              Implemented real-time price prediction and market analysis features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>100xDevs Cohort 3.0</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently learning and building full-stack applications with modern technologies.
              Working on real-world projects and collaborating with other developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
