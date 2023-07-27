import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const yair = "https://shpeuf.s3.amazonaws.com/public/team/yair.jpg";
const omar = "https://shpeuf.s3.amazonaws.com/public/team/omar.jpg";
const victoria = "https://shpeuf.s3.amazonaws.com/public/team/victoria.jpg";
const ju = "https://shpeuf.s3.amazonaws.com/public/team/julia.jpg";
const mateo = "https://shpeuf.s3.amazonaws.com/public/team/mateo.jpg";
const lucas = "https://shpeuf.s3.amazonaws.com/public/team/lucas.jpeg";
const isabella = "https://shpeuf.s3.amazonaws.com/public/team/isabella.jpg";
const joel = "https://shpeuf.s3.amazonaws.com/public/team/joel.jpeg";
const jesus = "https://shpeuf.s3.amazonaws.com/public/team/jesus.jpg";
const temp = "../assets/images/placeholder.png"
function DevTeamCards() {
  return (
    <>
      <Card.Group itemsPerRow={3}>
        <Card fluid image={yair} header="Yair Temkin" meta="Scrum Master" />
        <Card fluid image={omar} header="Omar Collado" meta="Project Manager" />
        <Card fluid image={ju} header="Julia Chancey" meta="Senior Developer" />
        <Card fluid image={victoria} header="Victoria De Alba" meta="Senior Developer" />
        <Card fluid image={mateo} header="Mateo Slivka" meta="Senior Developer" />
        <Card fluid image={lucas} header="Lucas Skaf" meta="Junior Developer" />
        <Card fluid image={isabella} header="Isabella Roman" meta="Junior Developer" />
        <Card fluid image={jesus} header="Jesus Jurado" meta="Junior Developer" />
        <Card fluid image={joel} header="Joel Aloma" meta="Junior Developer" />
      </Card.Group>
    </>
  );
}

export default DevTeamCards;
