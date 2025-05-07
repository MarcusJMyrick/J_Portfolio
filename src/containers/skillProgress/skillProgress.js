import React, {useState, useEffect} from "react";
import "./Progress.scss";
import { StyleContext } from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
import AnimationToolbox from "../../assets/lottie/Animation - 1746391184102.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {techStack} from "../../portfolio";

export default function StackProgress() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleToggle = idx => {
    if (!isMobile) {
      setOpenIndex(openIndex === idx ? null : idx);
    }
  };

  const handleMouseEnter = idx => {
    if (!isMobile) {
      setOpenIndex(idx);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenIndex(null);
    }
  };

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => (
              <div
                key={i}
                className={`skill skill-collapsible${
                  openIndex === i || isMobile ? " open" : ""
                }`}
                onClick={() => handleToggle(i)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                style={{cursor: isMobile ? "default" : "pointer"}}
              >
                <div className="skill-bar-label">
                  <h3>{exp.Stack}</h3>
                  <div className="meter">
                    <span style={{width: exp.progressPercentage}}></span>
                  </div>
                </div>
                <div
                  className="skill-details"
                  style={{
                    maxHeight: openIndex === i || isMobile ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <ul
                    style={{
                      margin: openIndex === i || isMobile ? "1em 0" : 0,
                      opacity: openIndex === i || isMobile ? 1 : 0,
                      transition: "opacity 0.3s"
                    }}
                  >
                    {exp.details &&
                      exp.details.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-image">
            <DisplayLottie animationData={AnimationToolbox} />
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
