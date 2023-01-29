import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

import yair from "../assets/images/team/yair.jpg";
import fer from "../assets/images/team/fernando.jpg";
import ju from "../assets/images/team/julia.jpg";
import omar from "../assets/images/team/omar.jpg";
import victoria from "../assets/images/team/victoria.jpg";
import andrea from "../assets/images/team/andrea.jpg";
import mateo from "../assets/images/team/mateo.jpg";
import lucas from "../assets/images/team/lucas.jpeg";
import isabella from "../assets/images/team/isabella.jpg";
//import joel from "../assets/images/team/joel.jpg";
import jesus from "../assets/images/team/jesus.jpg";
import temp from "../assets/images/team/placeholder.png";

function DevTeamCards() {
  return (
    <>
      <Card.Group itemsPerRow={4}>
        <Card fluid image={yair} header="Yair Temkin" meta="Scrum Master" />
        <Card fluid image={omar} header="Omar Collado" meta="Project Manager" />
        <Card fluid image={fer} header="Fernando Rauseo" meta="Project Manager" />
        <Card fluid image={ju} header="Julia Chancey" meta="Senior Developer" />
        <Card fluid image={victoria} header="Victoria De Alba" meta="Senior Developer" />
        <Card fluid image={mateo} header="Mateo Slivka" meta="Senior Developer" />
        <Card fluid image={lucas} header="Lucas Skaf" meta="Junior Developer" />
        <Card fluid image={isabella} header="Isabella Roman" meta="Junior Developer" />
        <Card fluid image={jesus} header="Jesus Jurado" meta="Junior Developer" />
        <Card fluid image={temp} header="Joel Aloma" meta="Junior Developer" />
      </Card.Group>
    </>
  );
}

export default DevTeamCards;
