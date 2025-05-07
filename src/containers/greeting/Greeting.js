import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import { StyleContext } from "../../contexts/StyleContext";
import Animation_skin_corrected from "../../assets/lottie/Animation_skin_corrected.json";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <a
                  href="/Nwaezeapu,Julu_CV.pdf"
                  download
                  className="download-link-button"
                >
                  <Button text="Download Resume" />
                </a>
                <Button text="Contact me" href="#contact" />
              </div>
            </div>
          </div>
          <div
            className="greeting-image-div"
          >
            <DisplayLottie
              animationData={Animation_skin_corrected}
              className="greeting-lottie"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
