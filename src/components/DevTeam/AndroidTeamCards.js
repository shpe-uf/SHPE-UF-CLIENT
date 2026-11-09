import React from "react";
import { Card, CardHeader } from "semantic-ui-react";
import DevTeam from "./css/DevTeam.css";

const team = {
  adrian: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/adrian_pelaez.JPG",
  ben: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/ben_shung.JPG",
  alex: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/alex_ospina.png",
  nico: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/nico_liway.JPG",
  gabriel: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/gabriel_munoz.JPG",
  alejandro: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/alejandro_jimenez.JPG",
  guillermo: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/guillermo_novillo.JPG",
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
        image={team.nico}
        header="Nico Liway"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.gabriel}
        header="Gabriel Muñoz"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.alejandro}
        header="Alejandro Jimenez"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.guillermo}
        header="Guillermo Novillo"
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
        header="Elijah Baez"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Isabel Tejeda"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Marco Schlageter"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Andres Arvelo"
        meta="Junior Developer"
        className="team-card-image"
      />
    </>
  );
}

export default DevTeamCards;
