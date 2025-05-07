import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import { StyleContext } from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  console.log('workExperiences:', workExperiences);
  console.log('workExperiences.experience:', workExperiences.experience);
  if (workExperiences.display) {
    const content = (
      <div className="experience-container" id="workExperience">
        <div>
          <h1 className="experience-heading">Experiences</h1>
          <div className="experience-cards-div">
            {workExperiences.experience.length === 0 && (
              <div style={{color: 'red', textAlign: 'center'}}>No experience cards found</div>
            )}
            {workExperiences.experience.map((card, i) => {
              return (
                <ExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    companylogo: card.companylogo,
                    role: card.role,
                    descBullets: card.descBullets
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
    return (
      <div id="experience">
        {isMobile ? content : <Fade bottom duration={1000} distance="20px">{content}</Fade>}
      </div>
    );
  }
  return null;
}
