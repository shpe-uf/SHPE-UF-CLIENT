import React from "react";
import { Card } from "semantic-ui-react";
import "./css/DevTeam.css";

const team = {
  ilaniSeguinot:
    "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/UIUX_Team/Ilani_seguinot.jpg",
  alejandroMateus:
    "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/UIUX_Team/alejandro_mateus.jpg",
  andresArvelo:
    "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/UIUX_Team/andres_arvelo.jpg",
  vianneeRosa:
    "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/UIUX_Team/vianne_rosa.jpg",
  edibMusic:
    "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/UIUX_Team/Edib_music.jpg",
};

function UIUXTeamCards() {
  return (
    <>
      <Card
        fluid
        image={team.ilaniSeguinot}
        header="Ilani Seguinot"
        meta="UI/UX Lead"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.alejandroMateus}
        header="Alejandro Mateus"
        meta="UI/UX Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.andresArvelo}
        header="Andres Arvelo"
        meta="UI/UX Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.vianneeRosa}
        header="Viannee Rosa"
        meta="UI/UX Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.edibMusic}
        header="Edib Music"
        meta="UI/UX Developer"
        className="team-card-image"
      />
    </>
  );
}

export default UIUXTeamCards;
