import React, {useState} from "react";
import "./Progress.scss";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
import AnimationToolbox from "../../assets/lottie/Animation - 1746391184102.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
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
                  openIndex === i ? " open" : ""
                }`}
                onClick={() => handleToggle(i)}
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
                style={{cursor: "pointer"}}
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
                    maxHeight: openIndex === i ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <ul
                    style={{
                      margin: openIndex === i ? "1em 0" : 0,
                      opacity: openIndex === i ? 1 : 0,
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
