import React from "react";
import {Fade} from "react-reveal";
import "./PublicationCard.scss";

const PublicationCard = ({publication}) => {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="publication-card">
        <div className="publication-card-body">
          <h2 className="publication-title">{publication.title}</h2>
          <p className="publication-journal">{publication.journal}</p>
          <p className="publication-authors">{publication.authors}</p>
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              View Publication
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default PublicationCard;
