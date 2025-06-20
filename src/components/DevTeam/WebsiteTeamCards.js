import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  omar: "https://shpeuf.s3.amazonaws.com/public/team/omar.jpg",
  jesus: "https://shpeuf.s3.amazonaws.com/public/team/jesus.jpg",
  isabella: "https://shpeuf.s3.amazonaws.com/public/team/isabella.jpg",
  ju: "https://shpeuf.s3.amazonaws.com/public/team/julia.jpg",
  victoria: "https://shpeuf.s3.amazonaws.com/public/team/victoria.jpg",
  mateo: "https://shpeuf.s3.amazonaws.com/public/team/mateo.jpg",
  alex: "https://shpeuf.s3.amazonaws.com/public/team/alex.png",
  alejandro: "https://shpeuf.s3.amazonaws.com/public/team/alejandro.png",
  jorge: "https://shpeuf.s3.amazonaws.com/public/team/george.jpg",
  emanuele:"https://shpeuf.s3.amazonaws.com/public/team/Emanuele.png",
  jackie: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/jackie.jpeg",
  daniel: "https://shpeuf.s3.amazonaws.com/public/team/daniel.jpg",
  marvin: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/marvin.png",
  oscar: "https://shpeuf.s3.amazonaws.com/public/team/oscar.jpg",
  //Using Oscar's placeholder image for Isa for the time being. 
  hector: "https://shpeuf.s3.amazonaws.com/public/team/hector.jpg",
  eduardo: "https://shpeuf.s3.amazonaws.com/public/team/eduardo.jpg",
  rachel: "https://shpeuf.s3.amazonaws.com/public/team/rachel.jpg",
  isamarin: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/isabellaMarin",
  monica: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/monica.png",
  steffano: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/steffano.png",
  leonardo: "https://shpeuf.s3.amazonaws.com/public/team/Leonardo.png",
  heiryn: "https://shpeuf.s3.us-east-1.amazonaws.com/public/team/heiryn.png"

}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.daniel} header="Daniel Permane" meta="Scrum Master" />
        <Card fluid image={team.jackie} header="Jackie Jurado" meta="Project Manager" />
        <Card fluid image={team.hector} header="Hector Borjas" meta="Junior Project Manager" />
        <Card fluid image={team.oscar} header="Oscar Delapresa" meta="Senior Developer" />
        <Card fluid image={team.marvin} header="Marvin Howell Aguirre" meta="Senior Developer" />
        <Card fluid image={team.rachel} header="Rachel Ponce" meta="Junior Developer" />
        <Card fluid image={team.eduardo} header="Eduardo Peña" meta="Junior Developer" />
        <Card fluid image={team.isamarin} header="Isabella Marin" meta="Junior Developer" />  
        <Card fluid image={team.monica} header="Monica Coira" meta="Junior Developer" /> 
        <Card fluid image={team.steffano} header="Steffano Cornejo" meta="Junior Developer" /> 
        <Card fluid image={team.heiryn} header="Heiryn Hernandez Rojas" meta="Junior Developer" />  
        <Card fluid image={team.leonardo} header= "Leonardo Cobaleda" meta="Junior Developer" />      

    </>
  );
}

export default DevTeamCards;
