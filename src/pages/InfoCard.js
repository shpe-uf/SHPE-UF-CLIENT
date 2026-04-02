import React from "react";
import "../Mentorshpe.css";

function InfoCard({ image, title, description, linkText, onClick, href }) {
  const content = (
    <div className="infoCard">
      <img src={image} alt={title} className="infoCardImage" />

      <div className="infoCardBody">
        <h3 className="infoCardTitle">{title}</h3>
        <p className="infoCardDescription">{description}</p>
      </div>

      <div className="infoCardFooter">
        {linkText}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="infoCardLinkWrapper"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="infoCardLinkWrapper" onClick={onClick}>
      {content}
    </div>
  );
}

export default InfoCard;