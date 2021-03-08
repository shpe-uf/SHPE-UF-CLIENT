import React from "react";
import {useState, useContext} from "react";
import { Container, Grid, Button, Modal, Card, Tab, Segment, Icon } from "semantic-ui-react";
import  CorporateCard  from "../components/CorporateCard";
//import Modal from "../components/CabinetModal";

import president from "../assets/images/eboard/president.jpeg";
import graduate from "../assets/images/eboard/graduate.jpeg";
import secretary from "../assets/images/eboard/secretary.jpg";
import treasurer from "../assets/images/eboard/treasurer.jpeg";
import marketing from "../assets/images/eboard/marketing.jpeg";
import corporate from "../assets/images/eboard/corporate.jpeg";
import technology from "../assets/images/eboard/technology.jpeg";
import external from "../assets/images/eboard/external.jpeg";
import internal from "../assets/images/eboard/internal.jpeg";

function email(email) {
  return (
    <a href={"mailto:" + email} className="link-email">
      <Icon name="mail" />
      Contact via email
    </a>
  );
}

function cabinet(){
  return (
<a>
      <Icon name="cabinet" />
      Learn more about cabinet
</a>
  //<div className="App">
      //<h1>Hello CodeSandbox</h1>
      //<Modal />
    //</div>
  );
}

function Cabinets(props){



}


function EBoardCards() {
  return (
    <>
      <Card
        fluid
        image={president}
        header="Federico Roye"
        meta="President"
        //extra={email("president.shpeuf@gmail.com")}
        extra = {cabinet()}
      />
      <Card
        fluid
        image={graduate}
        header="Baltazar Lopez Sardi"
        meta="Graduate Coordinator"
        //extra={email("graduate.shpeuf@gmail.com")}
        extra = {cabinet()}
      />
      <Card
        fluid
        image={secretary}
        header="Kelly Salas Diaz"
        meta="Secretary"
        //extra={email("secretary.shpeuf@gmail.com")}
        extra = {cabinet()}
      />
      <Card
        fluid
        image={treasurer}
        header="Tomas Cusi"
        meta="Treasurer"
        extra = {cabinet()}
        //extra={email("treasurer.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={marketing}
        header="Melody Morales Roja"
        meta="VP of Marketing"
        extra = {cabinet()}
        //extra={email("marketing.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={corporate}
        header="Ariana Ortega"
        meta="VP of Corporate Affairs"
        extra = {cabinet()}
        //extra={email("corporate.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={technology}
        header="Gabriel Rodríguez Torres"
        meta="VP of Technology"
        extra = {cabinet()}
        //extra={email("vptech.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={external}
        header="Lisa Duran"
        meta="VP of External Affairs"
        extra = {cabinet()}
        //extra={email("vpexternal.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={internal}
        header="Caterina Zientek"
        meta="VP of Internal Affairs"
        extra = {cabinet()}
        //extra={email("vpinternal.shpeuf@gmail.com")}
      />
    </>
  );
}

export default EBoardCards;
