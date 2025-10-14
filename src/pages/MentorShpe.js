import React from "react";
import {
  Container,
  Grid,
  Image
} from "semantic-ui-react";

import { img1, img2, img3 } from "../assets/images/mentorshpepics";

import Title from "../components/Title";

import "../App.css";


function MentorSHPE(){
    return (
        <div className="body">
          <div className="banner">
            <Image src={img1} fluid className="image1" />
            <div className="bannerText">
              <div className="bannerTitle">MentorSHPE</div>
              <div className="bannerSubtitle">Guiding the next generation of leaderSHPE</div>
            </div>
            <Image src={img2} className="image2"/>
          </div>
        </div>
      );
}

export default MentorSHPE;
