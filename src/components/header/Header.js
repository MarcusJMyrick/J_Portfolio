import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { StyleContext } from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

const Header = () => {
  const { viewBlogs, viewExperiences, viewSkills, viewEducation, viewProjects, viewPublications } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className="dark-menu header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon navicon-dark"></span>
        </label>
        <ul className="dark-menu menu">
          <li>
            <a href="#greeting">Home</a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills">About</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          <li>
            <a href="#projects">Research & Projects</a>
          </li>
          <li>
            <a href="#publications">Publications</a>
          </li>
          {viewBlog && (
            <li>
              <a href="#blogs">Writing</a>
            </li>
          )}
          <li>
            <a href="/Julu_Nwaezeapu_CV.pdf" download className="resume-button">
              Download Resume
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
