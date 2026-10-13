import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  // alex: "",
  kaylee: "s3://shpeuf/public/team/iOS_Team/kaylee_driscoll.JPG",
  alexandro: "s3://shpeuf/public/team/iOS_Team/alexandro_bonet.JPG",
  ana: "s3://shpeuf/public/team/iOS_Team/ana_quintero.JPG",
  jatin: "s3://shpeuf/public/team/iOS_Team/jatin_verma.JPG",
  edib: "s3://shpeuf/public/team/iOS_Team/edib_music.jpeg",
  placeholder: "s3://shpeuf/public/team/iOS_Team/dev.png"
}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.placeholder} header="Alex Milanes" meta="Swift Lead" />
        <Card fluid image={team.kaylee} header="Kaylee Driscoll" meta="Junior Project Manager" />    
        <Card fluid image={team.alexandro} header="Alexandro Bonet" meta="iOS Developer" />     
        <Card fluid image={team.ana} header="Ana Flores Quintero" meta="iOS Developer" />   
        <Card fluid image={team.jatin} header="Jatin Verma" meta="iOS Developer" />   
        <Card fluid image={team.edib} header="Edib Music" meta="iOS Developer" />   
    </>
  );
}

export default DevTeamCards;
