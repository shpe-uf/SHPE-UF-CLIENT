import React from "react";
import { Card, CardHeader } from "semantic-ui-react";

const team = {
  daniel: "https://shpeuf.s3.amazonaws.com/public/team/omar.jpg",
  pedro: "https://shpeuf.s3.amazonaws.com/public/team/jesus.jpg",

}

function DevTeamCards() {
  return (
    <>
        <Card fluid image={team.daniel} header="Daniel Parra" meta="Scrum Master" />
        <Card fluid image={team.pedro} header="Pedro Piedras" meta="Project Manager" />     
    </>
  );
}

export default DevTeamCards;
