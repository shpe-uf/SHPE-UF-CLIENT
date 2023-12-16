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
  alejandro: "https://shpeuf.s3.amazonaws.com/public/team/alejandro.png",
  jorge: "https://shpeuf.s3.amazonaws.com/public/team/Jorge.png",
  emanuele:"https://shpeuf.s3.amazonaws.com/public/team/Emanuele.png",
  jackie: "https://shpeuf.s3.amazonaws.com/public/team/Jackie.png",
  daniel: "https://shpeuf.s3.amazonaws.com/public/team/Daniel.png",
  marvin: "https://shpeuf.s3.amazonaws.com/public/team/Marvin.png",
  oscar: "https://shpeuf.s3.amazonaws.com/public/team/Oscar.png"

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
        <Card fluid image={team.jorge} header="Jorge Ramirez" meta="Junior Developer" />
        <Card fluid image={team.emanuele} header="Emanuele Epifani" meta="Junior Developer" />
        <Card fluid image={team.jackie} header="Jackie Jurado" meta="Junior Developer" />
        <Card fluid image={team.daniel} header="Daniel Permane" meta="Junior Developer" />
        <Card fluid image={team.marvin} header="Marvin Howell Aguirre" meta="Junior Developer" />
        <Card fluid image={team.oscar} header="Oscar Delapresa" meta="Junior Developer" />
    </>
  );
}

export default DevTeamCards;
