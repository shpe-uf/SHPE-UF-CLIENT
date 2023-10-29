import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  omar: "https://shpeuf.s3.amazonaws.com/public/team/omar.jpg",
  jesus: "https://shpeuf.s3.amazonaws.com/public/team/jesus.jpg",
  isabella: "https://shpeuf.s3.amazonaws.com/public/team/isabella.jpg",
  ju: "https://shpeuf.s3.amazonaws.com/public/team/julia.jpg",
  victoria: "https://shpeuf.s3.amazonaws.com/public/team/victoria.jpg",
  mateo: "https://shpeuf.s3.amazonaws.com/public/team/mateo.jpg",
  elisa: "https://shpeuf.s3.amazonaws.com/public/team/elisa.png",
  alex: "https://shpeuf.s3.amazonaws.com/public/team/alex.png",
  alejandro: "https://shpeuf.s3.amazonaws.com/public/team/alejandro.png"
}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.omar} header="Omar Collado" meta="Scrum Master" />
        <Card fluid image={team.jesus} header="Jesus Jurado" meta="Project Manager" />
        <Card fluid image={team.isabella} header="Isabella Roman" meta="Junior Project Manager" />
        <Card fluid image={team.ju} header="Julia Chancey" meta="Senior Developer" />
        <Card fluid image={team.victoria} header="Victoria De Alba" meta="Senior Developer" />
        <Card fluid image={team.mateo} header="Mateo Slivka" meta="Senior Developer" />
        <Card fluid image={team.elisa} header="Elisa Arenas" meta="Junior Developer" />
        <Card fluid image={team.alex} header="Alex Ruah" meta="Junior Developer" />
        <Card fluid image={team.alejandro} header="Alejandro Wakszol" meta="Junior Developer" />
    </>
  );
}

export default DevTeamCards;
