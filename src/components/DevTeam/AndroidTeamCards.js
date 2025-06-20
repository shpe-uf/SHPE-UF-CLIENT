import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  anthony: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/anthony_zurita.jpg",
  andrei: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/andrei_ursu.jpg",
  jake: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/Jake_west.jpg",
  adrian: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/Adrian_pelaez.jpg",
  braulio: "https://shpeuf.s3.amazonaws.com/public/team/Kotlin_Team/braulio_quintana.jpg",
  josue: "https://shpeuf.s3.amazonaws.com/public/team/dev.png",
  francoise: "https://shpeuf.s3.amazonaws.com/public/team/dev.png",
  sebastian: "https://shpeuf.s3.amazonaws.com/public/team/dev.png"
}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.anthony} header="Anthony Zurita" meta="Kotlin Lead" />
        <Card fluid image={team.andrei} header="Andrei Ursu" meta="Project Manager" />      
        <Card fluid image={team.jake} header="Jake West" meta="Kotlin Developer" />  
        <Card fluid image={team.adrian} header="Adrian Pelaez" meta="Kotlin Developer" /> 
        <Card fluid image={team.braulio} header="Braulio Quintana" meta="Kotlin Developer" /> 
        <Card fluid image={team.josue} header="Josue Vicente" meta="Kotlin Developer" /> 
        <Card fluid image={team.francoise} header="Francoise Hayek" meta="Kotlin Developer" /> 
        <Card fluid image={team.sebastian} header="Sebastian Villamizar" meta="Kotlin Developer" /> 
    </>
  );
}

export default DevTeamCards;
