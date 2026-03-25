import React from "react";
import { Card, CardHeader } from "semantic-ui-react";
import DevTeam from "./css/DevTeam.css";

const team = {
  omar: "https://shpeuf.s3.amazonaws.com/public/team/omar.jpg",
  jesus: "https://shpeuf.s3.amazonaws.com/public/team/jesus.jpg",
  isabella: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/Isa.JPG",
  ju: "https://shpeuf.s3.amazonaws.com/public/team/julia.jpg",
  victoria: "https://shpeuf.s3.amazonaws.com/public/team/victoria.jpg",
  mateo: "https://shpeuf.s3.amazonaws.com/public/team/mateo.jpg",
  alex: "https://shpeuf.s3.amazonaws.com/public/team/alex.png",
  alejandro: "https://shpeuf.s3.amazonaws.com/public/team/alejandro.png",
  jorge: "https://shpeuf.s3.amazonaws.com/public/team/george.jpg",
  emanuele: "https://shpeuf.s3.amazonaws.com/public/team/Emanuele.png",
  jackie: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/jackie.jpeg",
  daniel: "https://shpeuf.s3.amazonaws.com/public/team/daniel.jpg",
  marvin: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/marvin.JPG",
  oscar: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/oscar.JPG",
  natalie: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/natalie.JPG",
  omar: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/Omar.jpeg",
  hector: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/hector.JPG",
  rachel: "https://shpeuf.s3.amazonaws.com/public/team/rachel.jpg",
  isabel: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/isabel.JPG",
  monica: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/monica.png",
  heiryn: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/heiryn.JPG",
  tiffany:
    "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/Kotlin_Team/Tiffany.jpeg",
};

function DevTeamCards() {
  return (
    <>
      <Card
        fluid
        image={team.hector}
        header="Hector Borjas"
        meta="Technology Project Management Lead"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.oscar}
        header="Oscar Delapresa"
        meta="Scrum Master"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.marvin}
        header="Marvin Howell Aguirre"
        meta="Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.heiryn}
        header="Heiryn Hernandez Rojas"
        meta="Junior Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.isabella}
        header="Isabella Roman Ramirez"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.daniel}
        header="Daniel Permane"
        meta="Senior Developer"
        className="team-card-image"
      />

      <Card
        fluid
        image={team.isabel}
        header="Maria Isabel Hernandez"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.omar}
        header="Omar Elsayed"
        meta="Senior Developer"
        className="team-card-image"
      />

      <Card
        fluid
        image={team.monica}
        header="Monica Coira"
        meta="Junior Developer"
      />

      <Card
        fluid
        image={team.natalie}
        header="Natalie Ortiz"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.tiffany}
        header="Tiffany Huang"
        meta="Junior Developer"
        className="team-card-image"
      />
    </>
  );
}

export default DevTeamCards;
