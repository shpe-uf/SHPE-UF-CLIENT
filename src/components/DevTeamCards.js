import React from "react";
import { Card } from "semantic-ui-react";

import alejandro from "../assets/images/team/2019-2020/alejandro.png";
import cesar from "../assets/images/team/2019-2020/cesar.png";
import david from "../assets/images/team/2019-2020/david.png";
import diego from "../assets/images/team/2019-2020/diego.png";
import eduardo from "../assets/images/team/2019-2020/eduardo.png";
import isabel from "../assets/images/team/2019-2020/isabel.png";
import juan from "../assets/images/team/2019-2020/juan.png";
import mariana from "../assets/images/team/2019-2020/mariana.png";
import sofia from "../assets/images/team/2019-2020/sofia.png";
import placeholder from "../assets/images/team/placeholder.png";

function DevTeamCards() {
  return (
    <>
      <Card
        fluid
        image={eduardo}
        header="Eduardo Graziano"
        meta="Project Manager"
      />
      <Card
        fluid
        image={cesar}
        header="César González Peláez"
        meta="Scrum Master"
        />
      <Card
        fluid
        image={alejandro}
        header="Alejandro Alonso"
        meta="Developer"
      />
      <Card
        fluid
        image={diego}
        header="Diego Coviella"
        meta="Developer"
      />
      <Card
        fluid
        image={david}
        header="David Espantoso"
        meta="Developer"
      />
      <Card
        fluid
        image={sofia}
        header="Sofia Harmon"
        meta="Developer"
      />
      <Card
        fluid
        image={isabel}
        header="Isabel Mitre"
        meta="Developer"
      />
      <Card
        fluid
        image={placeholder}
        header="Gabriel Rodriguez Torres"
        meta="Developer"
      />
      <Card
        fluid
        image={juan}
        header="Juan Suhr"
        meta="Developer"
      />
      <Card
        fluid
        image={mariana}
        header="Mariana Torres Torres"
        meta="Developer"
      />
    </>
  );
}

export default DevTeamCards;
