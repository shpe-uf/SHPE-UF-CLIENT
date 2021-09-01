import React from "react";
import { Card } from "semantic-ui-react";

import isabel from "../assets/images/team/2019-2020/isabel.png";
import mariana from "../assets/images/team/2019-2020/mariana.png";
import placeholder from "../assets/images/team/placeholder.png";

function DevTeamCards() {
  return (
    <>
      <Card
        fluid
        image={mariana}
        header="Mariana Torres Torres"
        meta="Scrum Master"
      />
      <Card fluid image={isabel} header="Isabel Mitre" meta="Project Manager" />
      <Card fluid image={placeholder} header="Daniel Camejo" meta="Developer" />
      <Card fluid image={placeholder} header="Julia Chancey" meta="Developer" />
      <Card
        fluid
        image={placeholder}
        header="Isabella Rodriguez"
        meta="Developer"
      />
      <Card fluid image={placeholder} header="Yair Temkin" meta="Developer" />
    </>
  );
}

export default DevTeamCards;
