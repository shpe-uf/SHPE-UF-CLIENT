import React from "react";
import { Card } from "semantic-ui-react";

import andrea from "../assets/images/team/andrea.CR2";
import daniel from "../assets/images/team/daniel.CR2";
import fer from "../assets/images/team/fernando.CR2";
import mateo from "../assets/images/team/mateo.CR2";
import omar from "../assets/images/team/omar.CR2";
import ricardo from "../assets/images/team/ricardo.CR2";
import yair from "../assets/images/team/yair.CR2";
import temp from "../assets/images/team/placeholder.png";

function DevTeamCards() {
  return (
    <>
      <Card fluid image={daniel} header="Daniel Camejo" meta="Scrum Master" />
      <Card fluid image={fer} header="Fernando Rauseo" meta="Project Manager" />
      <Card fluid image={temp} header="Julia Chancey" meta="Senior Developer" />
      <Card fluid image={omar} header="Omar Collado" meta="Developer" />
      <Card fluid image={temp} header="Victoria De Alba" meta="Developer" />
      <Card fluid image={andrea} header="Andrea Moreno" meta="Developer" />
      <Card fluid image={ricardo} header="Ricardo Rosales" meta="Developer" />
      <Card fluid image={mateo} header="Mateo Slivka" meta="Developer" />
      <Card fluid image={yair} header="Yair Temkin" meta="Senior Developer" />
    </>
  );
}

export default DevTeamCards;
