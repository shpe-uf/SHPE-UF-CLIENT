import React from "react";
import { Card, Icon } from "semantic-ui-react";

import president from "../assets/images/eboard/president.png";
import graduate from "../assets/images/eboard/graduate.jpg";
import secretary from "../assets/images/eboard/secretary.jpg";
import treasurer from "../assets/images/eboard/treasurer.jpg";
import marketing from "../assets/images/eboard/marketing.jpg";
import corporate from "../assets/images/eboard/corporate.jpg";
import technology from "../assets/images/eboard/technology.jpg";
import external from "../assets/images/eboard/external.png";
import internal from "../assets/images/eboard/internal.png";

function email(email) {
  return (
    <a href={"mailto:" + email} className="link-email">
      <Icon name="mail" />
      Contact me via email
    </a>
  );
}

function EBoardCards() {
  return (
    <>
      <Card
        fluid
        image={president}
        header="Jose Luis Alegria"
        meta="President"
        extra={email("president.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={graduate}
        header="Nicholas Abuid"
        meta="Graduate Coordinator"
        extra={email("graduate.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={secretary}
        header="Isabella Campbell"
        meta="Secretary"
        extra={email("secretary.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={treasurer}
        header="Anthony Moreno"
        meta="Treasurer"
        extra={email("treasurer.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={marketing}
        header="Jonathan Morales"
        meta="Vice President of Marketing"
        extra={email("marketing.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={corporate}
        header="Jonathan Medina"
        meta="Vice President of Corporate Affairs"
        extra={email("corporate.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={technology}
        header="Rodrigo Lobo"
        meta="Vice President of Technology"
        extra={email("vptech.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={external}
        header="Domingo Alegria"
        meta="Vice President of External Affairs"
        extra={email("vpexternal.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={internal}
        header="Duncan Ross"
        meta="Vice President of Internal Affairs"
        extra={email("vpinternal.shpeuf@gmail.com")}
      />
    </>
  );
}

export default EBoardCards;
