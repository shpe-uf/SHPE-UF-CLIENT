import React from "react";
import { Card } from "semantic-ui-react";

import yair from "../assets/images/team/yair.jpg";
import fer from "../assets/images/team/fernando.jpg";
import ju from "../assets/images/team/julia.jpg";
import omar from "../assets/images/team/omar.jpg";
import victoria from "../assets/images/team/victoria.jpg";
import andrea from "../assets/images/team/andrea.jpg";
import mateo from "../assets/images/team/mateo.jpg";
import temp from "../assets/images/team/placeholder.png";

function DevTeamCards() {
  return (
    <>
      <Card fluid image={yair} header="Yair Temkin" meta="Scrum Master" />
      <Card fluid image={fer} header="Fernando Rauseo" meta="Project Manager" />
      <Card fluid image={ju} header="Julia Chancey" meta="Senior Developer" />
      <Card fluid image={omar} header="Omar Collado" meta="Senior Developer" />
      <Card fluid image={victoria} header="Victoria De Alba" meta="Senior Developer" />
      <Card fluid image={andrea} header="Andrea Moreno" meta="Senior Developer" />
      <Card fluid image={mateo} header="Mateo Slivka" meta="Senior Developer" />
    </>
  );
}

export default DevTeamCards;
