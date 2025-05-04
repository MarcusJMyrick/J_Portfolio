import React from "react";
import {Fade} from "react-reveal";
import "./Publications.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publications} from "../../portfolio";

const Publications = () => {
  if (!publications.display) {
    return null;
  }
  return (
    <div id="publications">
      <Fade bottom duration={1000} distance="20px">
        <div className="publications-container">
          <div>
            <h1 className="publications-heading">{publications.title}</h1>
            <div className="publications-cards-div">
              {publications.publications.map((publication, i) => {
                return (
                  <PublicationCard
                    key={i}
                    publication={publication}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Publications; 