import React from "react";
import {Fade} from "react-reveal";
import "./Footer.scss";

const Footer = () => {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </p>
      </div>
    </Fade>
  );
};

export default Footer;
