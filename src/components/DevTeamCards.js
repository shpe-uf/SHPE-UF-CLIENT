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
      <Card
        fluid
        image={placeholder}
        header="Daniel Camejo"
        meta="Senior Developer"
      />
      <Card
        fluid
        image={placeholder}
        header="Julia Chancey"
        meta="Senior Developer"
      />
      <Card fluid image={placeholder} header="Omar Collado" meta="Developer" />
      <Card
        fluid
        image={placeholder}
        header="Victoria De Alba"
        meta="Developer"
      />
      <Card fluid image={placeholder} header="Andrea Moreno" meta="Developer" />
      <Card
        fluid
        image={placeholder}
        header="Fernando Rauseo"
        meta="Developer"
      />
      <Card
        fluid
        image={placeholder}
        header="Isabella Rodriguez"
        meta="Senior Developer"
      />
      <Card
        fluid
        image={placeholder}
        header="Ricardo Rosales"
        meta="Developer"
      />
      <Card fluid image={placeholder} header="Mateo Slivka" meta="Developer" />
      <Card
        fluid
        image={placeholder}
        header="Yair Temkin"
        meta="Senior Developer"
      />
    </>
  );
}

export default DevTeamCards;
