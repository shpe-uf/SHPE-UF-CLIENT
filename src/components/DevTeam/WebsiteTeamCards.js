import React from "react";
import { Card, CardHeader } from "semantic-ui-react";
import DevTeam from "./css/DevTeam.css";

const team = {
  julio: "https://shpeuf.s3.amazonaws.com/public/team/julio_leonardi.JPG",
  heiryn: "https://shpeuf.s3.amazonaws.com/public/team/heiryn_hernandez_rojas.JPG",
  monica: "https://shpeuf.s3.amazonaws.com/public/team/monica_coira.JPG",
  natalie: "https://shpeuf.s3.amazonaws.com/public/team/natalie_ortiz.JPG",
  veronica: "https://shpeuf.s3.amazonaws.com/public/team/veronica_valdez.JPG",
  isabel: "https://shpeuf.s3.amazonaws.com/public/team/maria_isabel_hernandez.JPG",
  tiffany: "https://shpeuf.s3.amazonaws.com/public/team/tiffany_huang.JPG",
  mikelangelo: "https://shpeuf.s3.amazonaws.com/public/team/mikelangelo_mutti.JPG",
  placeholder: "https://shpeuf.s3.amazonaws.com/public/team/dev.png",
};

function DevTeamCards() {
  return (
    <>
      <Card
        fluid
        image={team.julio}
        header="Julio Leonardi"
        meta="Technology Project Management Lead"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.heiryn}
        header="Heiryn Hernandez Rojas"
        meta="Scrum Master"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.monica}
        header="Monica Coira"
        meta="Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.natalie}
        header="Natalie Ortiz"
        meta="Junior Project Manager"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.veronica}
        header="Veronica Valdez"
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
        image={team.tiffany}
        header="Tiffany Huang"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Javian Sandino"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Christen Borrero"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.placeholder}
        header="Max Arthay"
        meta="Junior Developer"
        className="team-card-image"
      />
      <Card
        fluid
        image={team.mikelangelo}
        header="Mikelangelo Mutti"
        meta="Junior Developer"
        className="team-card-image"
      />
    </>
  );
}

export default DevTeamCards;
