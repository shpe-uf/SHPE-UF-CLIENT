import React from "react";
import { Card, CardHeader } from "semantic-ui-react";
import DevTeam from "./css/DevTeam.css";

const team = {
  jake: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/Jake_west.jpg",
  julio:
    "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/Kotlin_Team/Julio.JPG",
  adrian:
    "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/Adrian_pelaez.jpg",
  josue: "https://shpeuf.s3.amazonaws.com/public/team/dev.png",
  alex: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/Kotlin_Team/Alex+Ospina.png",
  ben: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/Kotlin_Team/Ben.JPG",
  placeholder: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/dev.png",
};

function DevTeamCards() {
  return (
    <>
      <Card
        fluid
        image={team.adrian}
        header="Adrian Pelaez"
        meta="Kotlin Lead"
      />
      <Card
        fluid
        image={team.julio}
        header="Julio Leonardi"
        meta="Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.ben}
        header="Ben Shung"
        meta="Junior Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.alex}
        header="Alex Ospina"
        meta="Senior Developer"
        className="team-card-image"
      />

      <Card
        fluid
        image={team.placeholder}
        header="Luisa Almeida Quintella"
        meta="Senior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Gabriel Munoz"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Ivette Saldana"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Ethan Ortiz"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Guillermo Novillo"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Nicolas Liway"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Derek Rosales"
        meta="Junior Developer"
        className="team-card-image"
      />
    </>
  );
}

export default DevTeamCards;
