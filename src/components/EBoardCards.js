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

const researchDescription = (
  <span>
    Leads SHPE UF’s efforts to expand research accessibility, professional development, and innovation opportunities for members. 
    Oversee programs such as the Engineering Research Symposium, Designathon, lab tours, and research-focused initiatives 
    that connect students with faculty and research opportunities.
    Aid member development of technical skills, exploring research pathways, and building a strong foundation for academic and professional 
    success as well as support academic development of members looking to pursue a graduate education. 

  </span>
);

const secretaryDescription = (
  <span>
    Serves as the point of contact between the University of Florida and the SHPE UF Chapter 
    regarding university policies and programming logistics for chapter events. Manages our Alumni 
    Instagram and LinkedIn to keep graduates updated, strengthen alumni engagement, and expand networking resources for current members. 
    Oversees the SHPEducation, Yearbook, Alumni Relations, and Cabinet Liaison mini-cabinets to support our chapter’s goals. 
    Maintains the Chapter Management Tool and master calendar to keep event information and chapter data organized and up to date. 

  </span>
);

const treasurerDescription = (
  <span>
    Serve as the primary point of contact for any financial matters or concerns regarding SHPE. Maintain organizational financial strength, transparency, and sustainability by developing cabinet budgets and securing funding with the College of Engineering. Oversee all expense reimbursements, including National Convention travel, and coordinate essential logistics like GBM catering and professional padfolio distribution. Advance member equity and technical growth by sourcing scholarship opportunities and executing FinanceSHPE, SHPE TANK, and SHPE Capital programs.
  </span>
);

const marketingDescription = (
  <span>
    Serve as the second face of SHPE UF and create a lasting impression on new and current members. Manage and delegate responsibilities in each mini-cabinet (social media, content, video, photography, recruitment, graphic design, and apparel) to uphold our professional, yet fun, brand. Maintain a knowledge of all-things-SHPE to have the ability to speak about the organization at any outreach events. Oversee creative initiatives to market the organization across various platforms like Instagram and LinkedIn, as well as initiatives to market our various events and programs.

  </span>
);

const techDescription = (
  <span>
    Lead SHPE UF's technological initiatives by overseeing the design and development processes across all technical teams, including Software Engineering, Design, Mobile Apps, and UI/UX. Serve as the strategic bridge between development teams and the Executive Board to guide the trajectory of our website and applications while integrating feedback for new features. Oversee the planning and execution of flagship tech events such as the Code for Change Hackathon, Technical Workshops (SHPEWorks), and the Technology Leadership Development Program (TLDP). Innovate new technological solutions that further support the chapter, and collaborate with external organizations to expand our reach and empower a wider audience.
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
    Lead SHPE UF's outreach initiatives by fostering partnerships with K–12 schools, community organizations, and educational institutions to expand SHPE's impact beyond campus. Oversee the External Cabinet in planning and executing community service projects, SHPE Jr. programming, 
    and outreach events that inspire the next generation of STEM leaders. Support the growth of SHPE Jr. and PartnerSHPE chapters, strengthen relationships with schools and community partners, and guide the execution of flagship initiatives such as the SHPE Jr. Conference, Goals for Tomorrow (GFT), New Chapter Development, and Community Outreach while developing future leaders within the organization.
  </span>
);

const internalDescription = (
  <span>
    Spearheads the internal programming that drives member engagement and long-term retention across our chapter. Oversees six (6) dynamic programs including MentorSHPE, First Year Leadership Program (FYLP), SHPEtinas, SeniorSHPE, Athletics, and Events, while executing initiatives that connect members to mentorship, leadership development, and community. Strengthens chapter culture and cultivates a lasting SHPE familia from a member's first semester to graduation.

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
      <Card
        image={eboard.research.image}
        header={eboard.research.name}
        meta="VP of Research"
        extra={cabinet(
          "Research Cabinet",
          researchDescription,
          eboard.research.email,
          eboard.research.image
        )}
      />
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
