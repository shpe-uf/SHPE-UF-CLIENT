import React from "react";
import { Card } from "semantic-ui-react";
import CabinetModal from "../components/CabinetModal";

/*

Omitted but can be updated at a later date

import graduatePositions from "../assets/options/gradCabinet.json";
import secretaryPositions from "../assets/options/secretary.json";
import treasuryPositions from "../assets/options/treasury.json";
import marketingPositions from "../assets/options/marketing.json";
import technologyPositions from "../assets/options/technology.json";
import corporatePositions from "../assets/options/corporate.json";
import externalPositions from "../assets/options/external.json";
import internalPositions from "../assets/options/internal.json";
*/

import eboard from "../assets/eboard";

function cabinet(cabinet, description, email, pic) {
  return CabinetModal(cabinet, description, email, pic);
}

const presidentDescription = (
  <span>
    The SHPE-UF president is responsible for overseeing all events held by the
    chapter and in charge of heading the rest of eboard through their endeavors.
    Additionally, the president serves as a liaison between our chapter and SHPE
    at the regional and National level.
  </span>
);

// const graduateDescription = (
//   <span>
//     Manage events, workshops, and informational sessions to help members obtain
//     undergraduate research opportunities. Aid in the academic development of
//     members looking to pursue a graduate education. Bridge the gap between
//     undergraduate and graduate members by providing more opportunities for
//     interaction. Organize events that bolster graduate student involvement in
//     SHPE and in other organizations on campus. Use events as possible gateways
//     to recruit new graduate members.
//   </span>
// );

const secretaryDescription = (
  <span>
    Serve as a point of contact between UF and the organization regarding
    guidelines, rules and logistics for events/programs. Manage our Alumni
    LinkedIn network to keep our graduates on the loop and expand our networking
    resources. Alumni Panel, Social events, Internships/Research opportunities
    Update Facebook feed every Monday with the Weekly Updates. Oversee directors
    for each sub-cabinet (opportunities newsletter, yearbook,alumni relations,
    and cabinet liaison) to ensure everything is done on time. Secretary
    Qualities: detail-oriented, time management, organization and diligence
  </span>
);

const treasurerDescription = (
  <span>
    Create and monitor budgets for each cabinet Manage all reimbursements,
    including National Convention reimbursements Student Government Coordinate
    budget request process each semester Submit SAR forms and teach others how
    to do so Order food for all General Body Meetings Serve as point of contact
    for any financial matters regarding SHPE
  </span>
);

const marketingDescription = (
  <span>
    Serve as a point of communication between cabinet, other cabinets, new
    members and other orgs Manage and delegate responsibilities in each
    mini-cabinet (social media, recruitment, podcast, photography, video,
    marketing event, graphic design, apparel) Able to speak at a variety of
    events regarding SHPE at UF and its operations. This means you must have an
    understanding of everything SHPE and each cabinet has to offer as well as be
    up to date on all events Marketing Mindset: People, Publicity, Profit IN
    THAT ORDER Face of SHPE Part Two: But Now the Stakes are Lower
  </span>
);

const techDescription = (
  <span>
    Spearhead implementation days for prospective projects, including room
    reservations, tool inventory, and meeting tasks XTreme Engineering SHPE’s
    Hackathon Design Team Project Lead SHPE + SHPE JR Website Coding Interview
    Prep Collaborate with organizations on campus for tech projects Plan project
    details for the upcoming academic year Tech workshop series throughout Fall
    and Spring semesters
  </span>
);

const corporateDescription = (
  <span>
    Establish and maintain relationships between SHPE-UF and corporate sponsors
    Prepare Corporate Package and establish connections over the summer via
    email and video call Coordinate/plan info sessions and workshops with
    corporate sponsors (particularly during UF Career Showcase Week) Plan,
    market, and execute BBQ with Industry + Invite sponsors (in Fall and Spring)
    Prepare SHPE-UF members for SHPE National Convention Provide opportunities
    for professionalism and growth to chapter members (workshops, internships,
    info sessions, etc.) (New) Oversee LYLP in the Spring semester
  </span>
);

const externalDescription = (
  <span>
    Manage and guide 20+ directors for the following events and programs: SHPE
    Jr. (Middle and High School), MentorSHPE Jr., ShadowSHPE, TeXternal,
    PartnerSHPE, GFT (Spring only). Meet with each program/event directors
    separately to track progress, provide feedback, and provide guidance
    wherever necessary. Hold monthly SHPE Jr. meetings with all representatives,
    and monthly External Cabinet meetings with all directors. Attend all
    events/workshops for each of these respective events/programs. Work with the
    treasurer to receive a semesterly budget, and distribute amongst each
    program based on program/event needs. Selecting Directors (additional):
    Select SHPE Jr. Chair prior to the start of the school year. Plan and
    execute GFT application and interview processes. Select PartnerSHPE
    Ambassadors early in the school year. Act as a liaison and representative
    with: SHPE Jr. National and Regional Officers. New high schools and middle
    schools.
  </span>
);

const internalDescription = (
  <span>
    Plan, budget, market, and execute all internal events for SHPE UF students
    by communicating with the treasurer and marketing VP Socials, bonding days,
    banquets, and trips Manage FYLP and MentorSHPE programs Oversee directors
    for each program/event to assure events are timely budgeted, planned, and
    marketed Stadiums, Esports, WISDI, Events, FYLP, MentorSHPE Important
    qualities: punctuality, organization, communication
  </span>
);

function EBoardCards() {
  return (
    <>
      <Card
        image={eboard.president.image}
        header={eboard.president.name}
        meta="President"
        extra={cabinet(
          "President",
          presidentDescription,
          eboard.president.email,
          eboard.president.image
        )}
      />
      {/* <Card
        image={eboard.graduate.image}
        header={eboard.graduate.name}
        meta="Graduate Coordinator"
        extra={cabinet(
          "Graduate Cabinet",
          graduateDescription,
          eboard.graduate.email,
          eboard.graduate.image
        )}
      /> */}
      <Card
        image={eboard.secretary.image}
        header={eboard.secretary.name}
        meta="Secretary"
        extra={cabinet(
          "Secretary Cabinet",
          secretaryDescription,
          eboard.secretary.email,
          eboard.secretary.image
        )}
      />
      <Card
        image={eboard.treasurer.image}
        header={eboard.treasurer.name}
        meta="Treasurer"
        extra={cabinet(
          "Treasury Cabinet",
          treasurerDescription,
          eboard.treasurer.email,
          eboard.treasurer.image
        )}
      />
      <Card
        image={eboard.marketing.image}
        header={eboard.marketing.name}
        meta="VP of Marketing"
        extra={cabinet(
          "Marketing Cabinet",
          marketingDescription,
          eboard.marketing.email,
          eboard.marketing.image
        )}
      />
      <Card
        image={eboard.technology.image}
        header={eboard.technology.name}
        meta="VP of Technology"
        extra={cabinet(
          "Tech Cabinet",
          techDescription,
          eboard.technology.email,
          eboard.technology.image
        )}
      />
      <Card
        image={eboard.corporate.image}
        header={eboard.corporate.name}
        meta="VP of Corporate Affairs"
        extra={cabinet(
          "Corporate Cabinet",
          corporateDescription,
          eboard.corporate.email,
          eboard.corporate.image
        )}
      />
      <Card
        image={eboard.external.image}
        header={eboard.external.name}
        meta="VP of External Affairs"
        extra={cabinet(
          "External Cabinet",
          externalDescription,
          eboard.external.email,
          eboard.external.image
        )}
      />
      <Card
        image={eboard.internal.image}
        header={eboard.internal.name}
        meta="VP of Internal Affairs"
        extra={cabinet(
          "Internal Cabinet",
          internalDescription,
          eboard.internal.email,
          eboard.internal.image
        )}
      />
    </>
  );
}

export default EBoardCards;
