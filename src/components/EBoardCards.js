import React from "react";
import { Card } from "semantic-ui-react";
import CabinetModal from "../components/CabinetModal";
import PresidentModal from "../components/PresidentModal";

import president from "../assets/images/eboard/president.jpeg";
import graduate from "../assets/images/eboard/graduate.jpeg";
import secretary from "../assets/images/eboard/secretary.jpeg";
import treasurer from "../assets/images/eboard/treasurer.jpeg";
import marketing from "../assets/images/eboard/marketing.jpeg";
import technology from "../assets/images/eboard/technology.jpeg";
import corporate from "../assets/images/eboard/corporate.jpeg";
import external from "../assets/images/eboard/external.jpeg";
import internal from "../assets/images/eboard/internal.jpeg";

import graduatePositions from "../assets/options/gradCabinet.json";
import secretaryPositions from "../assets/options/secretary.json";
import treasuryPositions from "../assets/options/treasury.json";
import marketingPositions from "../assets/options/marketing.json";
import technologyPositions from "../assets/options/technology.json";
import corporatePositions from "../assets/options/corporate.json";
import externalPositions from "../assets/options/external.json";
import internalPositions from "../assets/options/internal.json";

function cabinet(cabinet, description, email, pic, json) {
  return CabinetModal(cabinet, description, email, pic, json);
}

function prezModal(cabinet, description, email, pic) {
  return PresidentModal(cabinet, description, email, pic);
}

const presidentDescription = (
  <div>
    Responsibilities: The SHPE-UF president is responsible for overseeing all
    events held by the chapter and in charge of heading the rest of eboard
    through their endeavors. Additionally, the president serves as a liaison
    between our chapter and SHPE at the regional and National level.
  </div>
);

const graduateDescription = (
  <div>
    Responsibilities: Manage events/workshops to instruct students on how to
    obtain research opportunities and grad studies options Webinars Research Day
    Info Sessions Bridge the gap between undergraduate and graduate members by
    providing more opportunities for interaction Coordinate with graduate
    organizations and departments to highlight SHPE to the graduate community at
    UF Use events as possible gateways to obtain new graduate members
  </div>
);

const secretaryDescription = (
  <div>
    Responsibilities: Serve as a point of contact between UF and the
    organization regarding guidelines, rules and logistics for events/programs.
    Manage our Alumni LinkedIn network to keep our graduates on the loop and
    expand our networking resources. Alumni Panel, Social events,
    Internships/Research opportunities Update Facebook feed every Monday with
    the Weekly Updates. Oversee directors for each sub-cabinet (opportunities
    newsletter, yearbook,alumni relations, and cabinet liaison) to ensure
    everything is done on time. Secretary Qualities: detail-oriented, time
    management, organization and diligence
  </div>
);

const treasurerDescription = (
  <div>
    Responsibilities: Create and monitor budgets for each cabinet Manage all
    reimbursements, including National Convention reimbursements Student
    Government Coordinate budget request process each semester Submit SAR forms
    and teach others how to do so Order food for all General Body Meetings Serve
    as point of contact for any financial matters regarding SHPE
  </div>
);

const marketingDescription = (
  <div>
    Responsibilities: Serve as a point of communication between cabinet, other
    cabinets, new members and other orgs Manage and delegate responsibilities in
    each mini-cabinet (social media, recruitment, podcast, photography, video,
    marketing event, graphic design, apparel) Able to speak at a variety of
    events regarding SHPE at UF and its operations. This means you must have an
    understanding of everything SHPE and each cabinet has to offer as well as be
    up to date on all events Marketing Mindset: People, Publicity, Profit IN
    THAT ORDER Face of SHPE Part Two: But Now the Stakes are Lower
  </div>
);

const techDescription = (
  <div>
  Responsibilities: Spearhead implementation days for prospective projects,
  including room reservations, tool inventory, and meeting tasks XTreme
  Engineering SHPE’s Hackathon Design Team Project Lead SHPE + SHPE JR Website
  Coding Interview Prep Collaborate with organizations on campus for tech
  projects Plan project details for the upcoming academic year Tech workshop
  series throughout Fall and Spring semesters
  </div>
);

const corporateDescription = (
  <div>
    Responsibilities: Establish and maintain relationships between SHPE-UF and
    corporate sponsors Prepare Corporate Package and establish connections over
    the summer via email and video call Coordinate/plan info sessions and
    workshops with corporate sponsors (particularly during UF Career Showcase
    Week) Plan, market, and execute BBQ with Industry + Invite sponsors (in Fall
    and Spring) Prepare SHPE-UF members for SHPE National Convention Provide
    opportunities for professionalism and growth to chapter members (workshops,
    internships, info sessions, etc.) (New) Oversee LYLP in the Spring semester
  </div>
);

const externalDescription = (
  <div>
    Responsibilities: Manage and guide 20+ directors for the following events
    and programs: SHPE Jr. (Middle and High School), MentorSHPE Jr., ShadowSHPE,
    TeXternal, PartnerSHPE, GFT (Spring only). Meet with each program/event
    directors separately to track progress, provide feedback, and provide
    guidance wherever necessary. Hold monthly SHPE Jr. meetings with all
    representatives, and monthly External Cabinet meetings with all directors.
    Attend all events/workshops for each of these respective events/programs.
    Work with the treasurer to receive a semesterly budget, and distribute
    amongst each program based on program/event needs. Selecting Directors
    (additional): Select SHPE Jr. Chair prior to the start of the school year.
    Plan and execute GFT application and interview processes. Select PartnerSHPE
    Ambassadors early in the school year. Act as a liaison and representative
    with: SHPE Jr. National and Regional Officers. New high schools and middle
    schools.
  </div>
);

const internalDescription = (
  <div>
    Responsibilities: Plan, budget, market, and execute all internal events for
    SHPE UF students by communicating with the treasurer and marketing VP
    Socials, bonding days, banquets, and trips Manage FYLP and MentorSHPE
    programs Oversee directors for each program/event to assure events are
    timely budgeted, planned, and marketed Stadiums, Esports, WISDI, Events,
    FYLP, MentorSHPE Important qualities: punctuality, organization,
    communication
  </div>
);

function EBoardCards() {
  return (
    <>
      <Card
        image={president}
        header="Jorge Moros"
        meta="President"
        extra={prezModal(
          "President",
          presidentDescription,
          "president.shpeuf@gmail.com",
          president
        )}
      />
      <Card
        image={graduate}
        header="Juan Valderrama"
        meta="Graduate Coordinator"
        extra={cabinet(
          "Graduate Cabinet",
          graduateDescription,
          "graduate.shpeuf@gmail.com",
          graduate,
          graduatePositions
        )}
      />
      <Card
        image={secretary}
        header="Bianca Piñeros"
        meta="Secretary"
        extra={cabinet(
          "Secretary Cabinet",
          secretaryDescription,
          "secretary.shpeuf@gmail.com",
          secretary,
          secretaryPositions
        )}
      />
      <Card
        image={treasurer}
        header="Frank Vigoa"
        meta="Treasurer"
        extra={cabinet(
          "Treasury Cabinet",
          treasurerDescription,
          "treasurer.shpeuf@gmail.com",
          treasurer,
          treasuryPositions
        )}
      />
      <Card
        image={marketing}
        header="Victor Rodriguez"
        meta="VP of Marketing"
        extra={cabinet(
          "Marketing Cabinet",
          marketingDescription,
          "marketing.shpeuf@gmail.com",
          marketing,
          marketingPositions
        )}
      />
      <Card
        image={technology}
        header="Mariana Torres Torres"
        meta="VP of Technology"
        extra={cabinet(
          "Tech Cabinet",
          techDescription,
          "vptech.shpeuf@gmail.com",
          technology,
          technologyPositions
        )}
      />
      <Card
        image={corporate}
        header="Paige Sam"
        meta="VP of Corporate Affairs"
        extra={cabinet(
          "Corporate Cabinet",
          corporateDescription,
          "corporate.shpeuf@gmail.com",
          corporate,
          corporatePositions
        )}
      />
      <Card
        image={external}
        header="Isabella Eby"
        meta="VP of External Affairs"
        extra={cabinet(
          "External Cabinet",
          externalDescription,
          "vpexternal.shpeuf@gmail.com",
          external,
          externalPositions
        )}
      />
      <Card
        image={internal}
        header="Katie Muratti"
        meta="VP of Internal Affairs"
        extra={cabinet(
          "Internal Cabinet",
          internalDescription,
          "vpinternal.shpeuf@gmail.com",
          internal,
          internalPositions
        )}
      />
    </>
  );
}

export default EBoardCards;
