import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  yair: "https://shpeuf.s3.amazonaws.com/public/team/yair.jpg",
  omar: "https://shpeuf.s3.amazonaws.com/public/team/omar.jpg",
  victoria: "https://shpeuf.s3.amazonaws.com/public/team/victoria.jpg",
  ju: "https://shpeuf.s3.amazonaws.com/public/team/julia.jpg",
  mateo: "https://shpeuf.s3.amazonaws.com/public/team/mateo.jpg",
  lucas: "https://shpeuf.s3.amazonaws.com/public/team/lucas.jpeg",
  isabella: "https://shpeuf.s3.amazonaws.com/public/team/isabella.jpg",
  joel: "https://shpeuf.s3.amazonaws.com/public/team/joel.jpeg",
  jesus: "https://shpeuf.s3.amazonaws.com/public/team/jesus.jpg",
  temp: "../assets/images/placeholder.png"
}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.yair} header="Yair Temkin" meta="Scrum Master" />
        <Card fluid image={team.omar} header="Omar Collado" meta="Project Manager" />
        <Card fluid image={team.ju} header="Julia Chancey" meta="Senior Developer" />
        <Card fluid image={team.victoria} header="Victoria De Alba" meta="Senior Developer" />
        <Card fluid image={team.mateo} header="Mateo Slivka" meta="Senior Developer" />
        <Card fluid image={team.lucas} header="Lucas Skaf" meta="Junior Developer" />
        <Card fluid image={team.isabella} header="Isabella Roman" meta="Junior Developer" />
        <Card fluid image={team.jesus} header="Jesus Jurado" meta="Junior Developer" />
        <Card fluid image={team.joel} header="Joel Aloma" meta="Junior Developer" />
    </>
  );
}

export default DevTeamCards;
