import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  anthony: "https://shpeuf.s3.amazonaws.com/public/team/omar.jpg",
  andrei: "https://shpeuf.s3.amazonaws.com/public/team/jesus.jpg",
}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.anthony} header="Anthony Zurita" meta="Scrum Master" />
        <Card fluid image={team.andrei} header="Andrei Ursui" meta="Project Manager" />      
    </>
  );
}

export default DevTeamCards;
