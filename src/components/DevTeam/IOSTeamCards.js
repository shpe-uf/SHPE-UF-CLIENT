import React from "react";
import { Card, CardHeader } from "semantic-ui-react";
import DevTeam from "./css/DevTeam.css";

const team = {
  david_denis: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/iOS_Team/david_denis_2026.JPG",
  mazin: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/iOS_Team/mazin_saleh.JPG",
  matthew: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/iOS_Team/matthew.png",
  carlos: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/iOS_Team/carlos_ch%C3%A1vez.jpg",
  placeholder: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/dev.png",
};

function DevTeamCards() {
  return (
    <>
      <Card
        fluid
        image={team.matthew}
        header="Matthew Segura"
        meta="Swift Lead"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.carlos}
        header="Carlos Chávez"
        meta="Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Josh Carron"
        meta="Junior Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.david_denis}
        header="David Denis"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Gabriella Garcia"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Alex Milanes"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Javier Martinez"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Pablo Pupo"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.mazin}
        header="Mazin Saleh"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Kaylee Driscoll"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Max Lopez Mateos"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Katherine Ortiz Perez"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Emma Watson"
        meta="Junior Developer"
        className="team-card-image"
      />
    </>
  );
}

export default DevTeamCards;
