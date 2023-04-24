import React from "react";
import { Card } from "semantic-ui-react";
import emptyImg from "../assets/images/about-1.jpg";
import JrSchoolModal from "./JrSchoolModal";

function partnerMod(schoolName, description, pic) {
  return JrSchoolModal(schoolName, description, pic);
}

const NortonDescription = (
  <div>
    Norton Elementary is a Gainesville public school where SHPE hosts monthly
    STEM days for the students in 1st-5th grade by coordinating with Ms. Watson
    and Ms. Herfurth. For each visit, we prepare one to three activities through
    which we introduce an engineering major to the students. The STEM days serve
    to foster student’s appreciation of science by reminding them of the fun,
    real world application of what they learn. SHPE UF also presents at Norton’s
    annual STEAM night, where students from the entire school have the
    opportunity to explore activities from various local organizations,
    including the 6-8 activities prepared by SHPE UF for the event.
  </div>
);
const IdylwildDescription = (
  <div>
    Idylwild Elementary is a public school located in Gainesville, where SHPE
    works with Ms. Porter to collaborate in the mentorship program and the
    robotics club. For the mentorship program, SHPE members are paired with a
    5th grader for a school year, allowing them to build a strong bond with
    their mentee, in which they can serve as a role model and confidant. For the
    robotics club, SHPE members come in throughout the year on a monthly basis
    to assist the student teams in building their robots, and preparing for the
    annual VEX Robotics Competition.
  </div>
);
const LittlewoodDescription = (
  <div>
    Littlewood Elementary is located in Gainesville, Florida. Our SHPEJr chapter
    hosts events such as STEM days with the kids! Check out our K-8 School
    Events for more info
  </div>
);
const PKYongeDescription = (
  <div>
    P.K. Yonge is a developmental research school with an emphasis on technical
    learning. SHPE hosts monthly STEM days for the 6th-8th grade students of Dr.
    Breil’s class, where we provide challenging activities for students to apply
    their technical knowledge in creative problem solving.
  </div>
);
const PKYongeHDescription = (
  <div>
    PK Yonge High School is located in Gainesville, Florida. Our SHPEJr chapter
    hosts events such as STEM days with the kids! Check out our K-8 School
    Events for more info
  </div>
);
const CypressBayDescription = (
  <div>
    Cypress Bay High School is located in Gainesville, Florida. Our SHPEJr
    chapter hosts events such as STEM days with the kids! Check out our K-8
    School Events for more info
  </div>
);
const RonaldWReaganDescription = (
  <div>
    Ronald W Reagan High School is located in Gainesville, Florida. Our SHPEJr
    chapter hosts events such as STEM days with the kids! Check out our K-8
    School Events for more info
  </div>
);
const NorthFloridaCentralDescription = (
  <div>
    North Florida Central High School is located in Gainesville, Florida. Our
    SHPEJr chapter hosts events such as STEM days with the kids! Check out our
    K-8 School Events for more info
  </div>
);
const MaterAcademyDescription = (
  <div>
    Mater Academy High School is located in Gainesville, Florida. Our SHPEJr
    chapter hosts events such as STEM days with the kids! Check out our K-8
    School Events for more info
  </div>
);

function JrSchoolCards() {
  return (
    <>
      <Card
        image={emptyImg}
        header="Norton"
        meta="Elementary School"
        extra={partnerMod(
          "Norton Elementary School",
          NortonDescription,
          emptyImg
        )}
      />
      <Card
        image={emptyImg}
        header="Idylwild"
        meta="Elementary School"
        extra={partnerMod(
          "Idylwild Elementary School",
          IdylwildDescription,
          emptyImg
        )}
      />
      <Card
        image={emptyImg}
        header="PK Yonge"
        meta="Middle School"
        extra={partnerMod(
          "PK Yonge Middle School",
          PKYongeDescription,
          emptyImg
        )}
      />
      <Card
        image={emptyImg}
        header="Cypress Bay High"
        meta="High School"
        extra={partnerMod(
          "Cypress Bay High School",
          CypressBayDescription,
          emptyImg
        )}
      />
      <Card
        image={emptyImg}
        header="Ronald W Reagan Sr."
        meta="High School"
        extra={partnerMod(
          "Ronald W Reagan High School",
          RonaldWReaganDescription,
          emptyImg
        )}
      />
      <Card
        image={emptyImg}
        header="North Florida Central"
        meta="High School"
        extra={partnerMod(
          "North Florida Central High School",
          NorthFloridaCentralDescription,
          emptyImg
        )}
      />

      <Card
        image={emptyImg}
        header="Mater Academy"
        meta="High School"
        extra={partnerMod(
          "Mater Academy High School",
          MaterAcademyDescription,
          emptyImg
        )}
      />
    </>
  );
}
export default JrSchoolCards;
