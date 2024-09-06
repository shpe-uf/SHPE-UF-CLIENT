import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  daniel: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/Daniel_parra.jpg",
  ashley: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/dev.png",
  david_denis: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/david_denis.jpg",
  mazin: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/Mazin_saleh.jpg",
  vivian: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/vivian_rincon.jpg",
  simar: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/simar_khetpal.jpg",
  matthew: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/matthew_segura.jpg",
  david_vera: "https://shpeuf.s3.amazonaws.com/public/team/iOS_Team/dev.png",


}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.daniel} header="Daniel Parra" meta="Swift Lead" />
        <Card fluid image={team.ashley} header="Ashley Guerra" meta="Project Manager" />    
        <Card fluid image={team.david_denis} header="David Denis" meta="iOS Developer" />     
        <Card fluid image={team.mazin} header="Mazin Saleh" meta="iOS Developer" />   
        <Card fluid image={team.vivian} header="Vivian Rincon" meta="iOS Developer" />   
        <Card fluid image={team.simar} header="Simar Kheptal" meta="iOS Developer" />   
        <Card fluid image={team.matthew} header="Matthew Segura" meta="iOS Developer" />   
        <Card fluid image={team.david_vera} header="David Vera" meta="iOS Developer" /> 
    </>
  );
}

export default DevTeamCards;
