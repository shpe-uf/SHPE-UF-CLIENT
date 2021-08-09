import React, {useState} from "react";
import { useContext} from "react";
import { Accordion, Container, Grid, Button, Card, Tab, Segment, Icon, Header, Image, Modal } from "semantic-ui-react";
import  CorporateCard  from "../components/CorporateCard";
import ModalDialog from 'react-bootstrap/ModalDialog'
import CorporationProfile from "../components/CorporationProfile";
import CorporationTable from "../components/CorporationTable";
import CabinetModal from "../components/CabinetModal";
import PresidentModal from "../components/PresidentModal";


import president from "../assets/images/eboard/president.jpeg";
import graduate from "../assets/images/eboard/graduate.jpeg";
import secretary from "../assets/images/eboard/secretary.jpg";
import treasurer from "../assets/images/eboard/treasurer.jpeg";
import marketing from "../assets/images/eboard/marketing.jpeg";
import corporate from "../assets/images/eboard/corporate.jpeg";
import technology from "../assets/images/eboard/technology.jpeg";
import external from "../assets/images/eboard/external.jpeg";
import internal from "../assets/images/eboard/internal.jpeg";


function cabinet(cabinet, description, email, pic, panels){
  return (
    CabinetModal(cabinet, description, email, pic, panels)
  )
}

function prezModal(cabinet, description, email, pic){
  return(
    PresidentModal(cabinet, description, email, pic)
  )
}


const secretaryPanels = [
{
key: 'alumni-relations-director',
title: 'Alumni Relations Director',
content: [
'As a director, you will be the main contact between the members and alumni through our LinkedIn page.',
'This person will be in charge of managing our LinkedIn page and keeping our alumni in the loop about events,',
'building and fostering relationships. You will oversee communication with alumni to start a new segment',
'in our social media, where they showcase their experience as a college graduate and a full-time employee.',
,
].join(' '),
},
{
key: 'cabinet-faculty-liaison',
title: 'Cabinet and Faculty Liaison',
content: [
'You will be in charge of communicating with other cabinets regarding their events in order to ensure the logistics. Due to COVID-19, the majority of the events will be online, however, we will need you to contact the university to make sure we are following the appropriate procedure. You will also be in charge of posting our weekly updates on the Facebook page, therefore, communication with the rest of directors and E-board members is key.'
,
].join(' '),
},
{
key: 'leadership-opportunities',
title: 'Leadership Opportunities Newsletter Director',
content: {
content: (
<div>
  <p>
  Your main role will be researching professional opportunities (recruitments events, conferences, technical workshops etc.) on campus and within companies. After compiling the information, you will create a monthly newsletter and share it with all the members through social media to help them find new opportunities to network and grow.

  </p>
</div>
),
},
},
{
key: 'yearbook-director',
title: 'Yearbook Director',
content: {
content: (
<div>
  <p>
  This is a great opportunity to showcase your creativity and bring new ideas to the table. This position opened last year, and unfortunately, we could not have a paperback version, but we are hoping for the best this year. As a director, you will be working very closely with the marketing cabinet to collect pictures from every event. Since a lot of events will be online, all ideas/alternatives are welcome

  </p>
</div>
),
},
},
]

const presidentPanels = [
{
key: 'i-am-prez',
title: 'President',
content: [
'hello, hello i am fede',
].join(' '),
}
]

const internalPanels = [
{
key: 'event-director',
title: 'Event Director',
content: {
content: (
<div>
  <p>
  You will plan, coordinate, and execute internal events. Some prospective events include tailgates, camping trips, socials, and other bonding events. Be prepared to plan both in-person and virtual events that are engagement and foster a welcoming environment.

  </p>
</div>
),
},
},

{
key: 'women',
title: 'Women in STEM / Diversity and Inclusion Directors',
content: {
content: (
<div>
  <p>
  You will be in charge of coordinating and executing events that empower Women in STEM. This year this position is opening up to also Diversity and Inclusion to include partnerships with other organizations, such as BEC, SWE, and NSBE. Events or series of events will include virtual and in-person planning.

  </p>
</div>
),
},
},

{
key: 'athletics',
title: 'Athletics Directors',
content: {
content: (
<div>
  <p>
  You will be in charge of running our "Get in SHPE" Program. This director team will be comprised of in-person workouts and virtual team bonding games. One director will have the responsibility of planning and running weekly Stadiums for SHPE members to attend. You will need to come up with workouts and safely gather everyone to bond while working out. This director needs to be in Gainesville for the semester as Stadium workouts will take place in person (for as long as COVID allows). The other director can run things virtually as their duties are to gather people and create an online sports tournament. You can work together with your director on both programs or you can split this position to be Stadium Director and Esports Director.

  </p>
</div>
),
},
},

{
key: 'mentorshpe',
title: 'MentorSHPE Director',
content: {
content: (
<div>
  <p>
  As MentorSHPE Director, you will be one of two directors in charge of running SHPE’s mentoring program. Your responsibilities are to matchmake pairs and keep them involved through the semester by providing weekly challenges. Keep in mind that challenges need to be virtually possible and going to La Tienda may not be possible.

  </p>
</div>
),
},
},

{
key: 'fylp',
title: 'FYLP Director',
content: {
content: (
<div>
  <p>
  You will be one of the directors in charge of running the First Year LeaderSHPE Program. As a FYLP director, your mission is to jumpstart the development of our first year students to assure their success. Your responsibilities are to organize biweekly workshops (5 - 6 during the semester) that are engaging, educational, and promote bonding. Keep in mind these events may be virtual or in-person preferably split between both.

  </p>
</div>
),
},
},
]

const treasuryPanels = [
{
key: 'scholarship',
title: 'Scholarship Newsletter Executive Director',
content: {
content: (
<div>
  <p>
  If chosen, the executive director is responsible for creating a bi-monthly scholarship newsletter that includes multiple scholarships for each month and advertising the newsletter to members of the SHPE community. Must work with the treasurer in order to produce proper newsletters.

  </p>
</div>
),
},
},

{
key: 'fundraising',
title: 'Fundraising Executive Director',
content: {
content: (
<div>
  <p>
  If chosen, the executive director is responsible for producing fundraisers in order to increase awareness of SHPE and build stronger ties with the community and the city of Gainesville. Must work with the treasurer in order to organize events.

  </p>
</div>
),
},
},

{
key: 'bec',
title: 'BEC Representative Director',
content: {
content: (
<div>
  <p>
  If chosen, the executive director will be responsible to attend all the Student Government meetings as well as be informed of all the policies. Must work with the treasurer in order to deliver the information.

  </p>
</div>
),
},
},

{
key: 'reimbursement',
title: 'Reimbursement Executive Director',
content: {
content: (
<div>
  <p>
  If chosen, executive director will be in charge of tracking and updating various budgets using Excel spreadsheet. Must work closely with the treasurer on budget adjustments.

  </p>
</div>
),
},
},

{
key: 'gbm',
title: 'General Body Meeting Directors',
content: {
content: (
<div>
  <p>
  If chosen, the executive director will be in charge of searching for good and affordable options for the General Body Meetings, as well as find volunteers to help serve the food at such meetings. Sometimes you will be asked to purchase the food but the money will be reimbursed to you. In addition, volunteers and directors should do their best to clean up after the GBM is over.
Note: Advised to have a credit card, and be able to accommodate transport for food.

  </p>
</div>
),
},
},
]


const techPanels = [
{
key: 'xtreme',
title: 'XTreme Engineer Director',
content: {
content: (
<div>
  <p>
  XTreme Engineering Directors will be in charge of SHPE UF 12 hour XTreme Engineering Competition. This includes planning, organizing and working with other organizations prior to the event. You will be responsible for this year's problem statement, marketing and logistics for the event.

  </p>
</div>
),
},
},

{
key: 'texternal',
title: 'TeXternal Director',
content: {
content: (
<div>
  <p>
  TeXternal Director position will cover the scope of all technical needs of the external cabinet and you will report to both the VP Tech and VP External. You should assist and provide ideas with any technical projects or activities needed for an event, including, but not limited to, SHPE Jr., E-week, elementary and middle school outreach, ShadowSHPE, etc.

  </p>
</div>
),
},
},

{
key: 'shpeworks',
title: 'SHPEWorks Director',
content: {
content: (
<div>
  <p>
  SHPEWorks are a series of workshops intended to increase technical awareness. These workshops will explore various computer, electrical, and mechanical engineering principles. Directors are responsible for planning and deciding time, location, theme and goals of the workshops.

  </p>
</div>
),
},
},

{
key: 'shpeinnovate',
title: 'SHPEInnovate Director',
content: {
content: (
<div>
  <p>
  SHPEInnovate Director will be in charge of SHPE UF Hackathon. This includes planning, organizing and working with other organizations prior to the event. You will be responsible for this year themae, marketing and logistics for the event.

  </p>
</div>
),
},
},

{
key: 'shperentals',
title: 'SHPERentals Director',
content: {
content: (
<div>
  <p>
  SHPERentals Director will be responsible for keeping track and monitoring our SHPE UF inventory, developing a tier system for items and serve as primary form of communication for SHPEitos trying to rent items from our Rentals feature within our web app.

  </p>
</div>
),
},
},

{
key: 'software',
title: 'Software Developer Director',
content: {
content: (
<div>
  <p>
  You will be part of the technical team that develops and maintains the web app used by SHPE UF (shpeuf.com). The directors will work with other software developer directors under a project manager in the Technology Cabinet. Familiarity with some form of programming recommended.

  </p>
</div>
),
},
},
]

const graduatePanels = [
{
key: 'gradCabinet',
title: 'Graduate Cabinet Director',
content: {
content: (
<div>
  <p>
  This position will shadow the Graduate Coordinator and help other directors in completing their tasks. Another very important responsibility involves coming up with ideas to bring graduate students closer to SHPE and showcase graduate life to current undergraduate students. This could be done for example by collaborating with the Marketing Cabinet to introduce content to attract graduate students and present graduate life to undergraduates.

  </p>
</div>
),
},
},

{
key: 'eventManager',
title: 'Event Manager',
content: {
content: (
<div>
  <p>
  This position is for those who love or want to get experience with planning events/workshops. You will work closely with me to make informative and hopefully fun events/workshops regarding graduate topics. I am looking for a person who is motivated and creative, someone that will bring new event ideas and make current events even better. You don't need to have any experience with event coordinating or anything of the sort, everything that you will need you will learn over time in your position.

  </p>
</div>
),
},
},

{
key: 'profDev',
title: 'Professional Development Director',
content: {
content: (
<div>
  <p>
  This position is focused on current SHPE members and teaching them about their options during and after college in relation to graduate topics. This involves everything from creating newsletters by collaborating with the secretary cabinet about grad opportunities/programs to helping me coordinate one-on-one counseling with our members on how to best prepare for graduate opportunities (e.g fix resume).

  </p>
</div>
),
},
},

]

const externalPanels = [

{
key: 'shpejr',
title: 'SHPE Jr. Representative',
content: {
content: (
<div>
  <p>
  SHPE Jr chapters are pre-college SHPE chapters (usually at high schools) mentored by college chapters. Our UF chapter currently mentors three Jr chapters: P.K. Yonge, Gainesville High, and one in Weston, Cypress Bay. The SHPE Jr. Rep serves as the liaison between our chapter and the PK Yonge SHPE Jr chapter.

  </p>
</div>
),
},
},

{
key: 'shpejrelementary',
title: 'SHPE Jr. Elementary/Middle School Representative',
content: {
content: (
<div>
  <p>
  This year the external cabinet wants to expand our outreach to target younger students. Similar to a SHPE Jr. Rep, the elementary/middle school director will serve as a liaison between UF and a local school to offer mentorship, tutoring, and find creative ways to get younger kids become interested in STEM. This position will also fall beneath the scope of the SHPE Jr. Chair.

  </p>
</div>
),
},
},

{
key: 'mentorshpejr',
title: 'MentorSHPE Jr. Director',
content: {
content: (
<div>
  <p>
  This year the external cabinet wants to expand our SHPE Jr. program, and provide our younger students with mentorship and guidance from an early stage. The MentorSHPE Director will be responsible for the launch and sustainability of our new mentorship program, working with our Representatives to deploy in the high school chapters.

  </p>
</div>
),
},
},

{
key: 'partnershpe',
title: 'PartnerSHPE Director',
content: {
content: (
<div>
  <p>
  PartnerSHPE is a program designed to help ease the transition for students seeking to transfer from Santa Fe College to the University of Florida. Often these students are not aware of everything they could be doing to enhance their professional skills and improve their chances of going into industry. The PartnerSHPE directors will organize workshops and help provide resources to Santa Fe students.

  </p>
</div>
),
},
},

{
key: 'outreach',
title: 'Outreach Director',
content: {
content: (
<div>
  <p>
  As part of our commitment to community outreach, SHPE has one event per semester to benefit the community. In the past it has been a forest clean-up, beach clean-up and a Brush with Kindness. Yet, we are striving to have more variety to engage members and make a long lasting impact on the community, thus creativity is needed for this position. Apart from community service, the outreach director will also be responsible for promoting sustainability throughout SHPE. Due to COVID-19, outreach will have to shift to hybrid or virtual, depending on the development of the pandemic.

  </p>
</div>
),
},
},

{
key: 'shadowshpe',
title: 'ShadowSHPE Director',
content: {
content: (
<div>
  <p>
  ShadowSHPE is a program in which high school students will have the opportunity to come to UF to spend the day with our SHPE members. The event is geared towards teaching high school students that participate in their SHPE Jr. about careers in engineering and professional development at the University of Florida. Due to COVID-19 ShadowSHPE will not be in person during Fall 2020, with a slight possibility of holding the event in person during Spring 2021.

  </p>
</div>
),
},
},

]

const corporatePanels = [

{
key: 'project',
title: 'Project Manager',
content: {
content: (
<div>
  <p>
  As a Project Manager in the Corporate Cabinet, you will work alongside your co-directors to plan, coordinate, and execute new and innovative virtual/hybrid events for our members to attend. Such events include but are definitely not limited to financial literacy workshops, industry shadowing week, resume building workshops, internship prep workshops, etc.

  </p>
</div>
),
},
},
]

const marketingPanels = [

{
key: 'vp-marketing',
title: 'VP Marketing',
content: {
content: (
<div>
  <p>
  The Vice President of Marketing’s responsibilities lie within Recruitment, Public Relations, and Event Promotion of the organization. They serve as a point of communication between cabinet, other cabinets, new members and other orgs. Manage and delegate responsibilities in each mini-cabinet (social media, recruitment, podcast, photography, video, marketing event, graphic design, apparel).
  </p>
</div>
),
},
},

{
key: 'marktingleaddirector',
title: 'Marketing Lead Director',
content: {
content: (
<div>
  <p>
  Marketing Lead Director acts as the VP Marketings right hand. Facilitates the communication between all mini cabinets and the Secretary Cabinet. They can assist any mini-cabinet with their needs and act as an aid when needed.

  </p>
</div>
),
},
},

{
key: 'socialmedia',
title: 'Social Media Director',
content: {
content: (
<div>
  <p>
  Social Media directors manage all social media platforms including Instagram, Tik Tok, and Youtube. This includes posting and editing pictures on our Instagram, creating Tik Tok videos, creating member highlight stories, and posting videos on Youtube/IGTV.

  </p>
</div>
),
},
},

{
key: 'graphic design',
title: 'Graphic Design Director',
content: {
content: (
<div>
  <p>
  Graphics Director oversees media designs including flyers, t-shirt designs, stickers, and advertisements.

  </p>
</div>
),
},
},

{
key: 'recruitment',
title: 'Recruitment Director',
content: {
content: (
<div>
  <p>
  Recruitment Directors are responsible for recruiting new members to SHPE and spreading the word about our organization. This will include leading recruitment initiatives, speaking in classes, and attending recruiting events when possible.


  </p>
</div>
),
},
},

{
key: 'event',
title: 'Marketing Event Director',
content: {
content: (
<div>
  <p>
  Marketing Event Directors plan and execute the logistics for marketing events throughout the year that bring a creative outlook to our members. Our main marketing event is Mural Day - an annual event where we go to 34th street and fill one mural with SHPE spirit. Past marketing events have included Tie Dye Day and an arts and crafts social.


  </p>
</div>
),
},
},

{
key: 'video',
title: 'Videography Director',
content: {
content: (
<div>
  <p>
  Video Directors document in-person SHPE events and members' experiences through videos. Will oversee editing videos to post on the SHPE social media pages.


  </p>
</div>
),
},
},

{
key: 'photo',
title: 'Photography Director',
content: {
content: (
<div>
  <p>
  Photo Directors document all SHPE experiences and events through photography. Directors upload pictures and showcase what a great familia we are to the UF community.


  </p>
</div>
),
},
},

{
key: 'apparel',
title: 'Apparel Director',
content: {
content: (
<div>
  <p>
  Apparel Directors are responsible for all of our merchandise, from brainstorming ideas for new apparel and designs, to getting estimates and actual orders placed for the cabinet. Directors will also keep track of our inventory as merchandise is sold.


  </p>
</div>
),
},
},

{
key: 'podcast',
title: 'Podcast Director',
content: {
content: (
<div>
  <p>
  Podcast Directors create audio and/or visual podcasts throughout the semester which document SHPEitos experiences, recommendations, and anecdotes in a light hearted and fun light.

  </p>
</div>
),
},
},

]

const secretaryDescription = <div>
Responsibilities:

Serve as a point of contact between UF and the organization regarding guidelines, rules and logistics for events/programs.
Manage our Alumni LinkedIn network to keep our graduates on the loop and expand our networking resources.
Alumni Panel, Social events, Internships/Research opportunities
Update Facebook feed every Monday with the Weekly Updates.
Oversee directors for each sub-cabinet (opportunities newsletter, yearbook,alumni relations, and cabinet liaison) to ensure everything is done on time.
Secretary Qualities: detail-oriented, time management, organization and diligence

</div>

const internalDescription = <div>
Responsibilities:
Plan, budget, market, and execute all internal events for SHPE UF students by communicating with the treasurer and marketing VP
Socials, bonding days, banquets, and trips
Manage FYLP and MentorSHPE programs
Oversee directors for each program/event to assure events are timely budgeted, planned, and marketed
Stadiums, Esports, WISDI, Events, FYLP, MentorSHPE
Important qualities: punctuality, organization, communication

</div>

const treasurerDescription = <div>
Responsibilities:
Create and monitor budgets for each cabinet
Manage all reimbursements, including National Convention reimbursements
Student Government
Coordinate budget request process each semester
Submit SAR forms and teach others how to do so

Order food for all General Body Meetings
Serve as point of contact for any financial matters regarding SHPE

</div>

const techDescription = <div>
Responsibilities:
Spearhead implementation days for prospective projects, including room reservations, tool inventory, and meeting tasks
XTreme Engineering
SHPE’s Hackathon
Design Team
Project Lead SHPE + SHPE JR Website
Coding Interview Prep
Collaborate with organizations on campus for tech projects
Plan project details for the upcoming academic year
Tech workshop series throughout Fall and Spring semesters

</div>

const graduateDescription = <div>
Responsibilities:
Manage events/workshops to instruct students on how to obtain research opportunities and grad studies options
Webinars
Research Day
Info Sessions
Bridge the gap between undergraduate and graduate members by providing more opportunities for interaction
Coordinate with graduate organizations and departments to highlight SHPE to the graduate community at UF
Use events as possible gateways to obtain new graduate members

</div>

const externalDescription = <div>
Responsibilities:
Manage and guide 20+ directors for the following events and programs: SHPE Jr. (Middle and High School), MentorSHPE Jr., ShadowSHPE, TeXternal, PartnerSHPE, GFT (Spring only).
Meet with each program/event directors separately to track progress, provide feedback, and provide guidance wherever necessary.

Hold monthly SHPE Jr. meetings with all representatives, and monthly External Cabinet meetings with all directors.
Attend all events/workshops for each of these respective events/programs.
Work with the treasurer to receive a semesterly budget, and distribute amongst each program based on program/event needs.
Selecting Directors (additional):
Select SHPE Jr. Chair prior to the start of the school year.
Plan and execute GFT application and interview processes.
Select PartnerSHPE Ambassadors early in the school year.
Act as a liaison and representative with:
SHPE Jr. National and Regional Officers.
New high schools and middle schools.

</div>

const corporateDescription = <div>
Responsibilities:
Establish and maintain relationships between SHPE-UF and corporate sponsors
Prepare Corporate Package and establish connections over the summer via email and video call
Coordinate/plan info sessions and workshops with corporate sponsors (particularly during UF Career Showcase Week)
Plan, market, and execute BBQ with Industry + Invite sponsors (in Fall and Spring)
Prepare SHPE-UF members for SHPE National Convention
Provide opportunities for professionalism and growth to chapter members (workshops, internships, info sessions, etc.)
(New) Oversee LYLP in the Spring semester

</div>

const marketingDescription = <div>
Responsibilities:
Serve as a point of communication between cabinet, other cabinets, new members and other orgs
Manage and delegate responsibilities in each mini-cabinet (social media, recruitment, podcast, photography, video, marketing event, graphic design, apparel)
Able to speak at a variety of events regarding SHPE at UF and its operations. This means you must have an understanding of everything SHPE and each cabinet has to offer as well as be up to date on all events
Marketing Mindset: People, Publicity, Profit IN THAT ORDER
Face of SHPE Part Two: But Now the Stakes are Lower

</div>

const presidentDescription = <div>
Responsibilities:
The SHPE-UF president is responsible for overseeing all events held by the chapter and in charge of heading the rest of eboard through their endeavors. Additionally, the president serves as a liaison between our chapter and SHPE at the regional and National level.

</div>

function EBoardCards() {



  return (

    <>

      <Card
        fluid
        image={president}
        header="Federico Roye"
        meta="President"
        //extra={email("president.shpeuf@gmail.com")}
        extra = {prezModal("President",presidentDescription,"president.shpeuf@gmail.com", president)}


      />
      <Card
        fluid
        image={graduate}
        header="Baltazar Lopez Sardi"
        meta="Graduate Coordinator"
        //extra={email("graduate.shpeuf@gmail.com")}
        extra = {cabinet("Graduate Cabinet",graduateDescription,"graduate.shpeuf@gmail.com", graduate, graduatePanels)}
      />
      <Card
        fluid
        image={secretary}
        header="Kelly Salas Diaz"
        meta="Secretary"
        //extra={email("secretary.shpeuf@gmail.com")}


        extra = {cabinet("Secretary Cabinet",secretaryDescription,"secretary.shpeuf@gmail.com", secretary, secretaryPanels)}



      />
      <Card
        fluid
        image={treasurer}
        header="Tomas Cusi"
        meta="Treasurer"
        extra = {cabinet("Treasury Cabinet",treasurerDescription,"treasurer.shpeuf@gmail.com", treasurer, treasuryPanels)}
        //extra={email("treasurer.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={marketing}
        header="Melody Morales Roja"
        meta="VP of Marketing"
        extra = {cabinet("Marketing Cabinet",marketingDescription,"marketing.shpeuf@gmail.com", marketing, marketingPanels)}
        //extra={email("marketing.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={corporate}
        header="Ariana Ortega"
        meta="VP of Corporate Affairs"
        extra = {cabinet("Corporate Cabinet",corporateDescription,"corporate.shpeuf@gmail.com", corporate, corporatePanels)}
        //extra={email("corporate.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={technology}
        header="Gabriel Rodríguez Torres"
        meta="VP of Technology"
        extra = {cabinet("Tech Cabinet",techDescription,"vptech.shpeuf@gmail.com", technology, techPanels)}
        //extra={email("vptech.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={external}
        header="Lisa Duran"
        meta="VP of External Affairs"
        extra = {cabinet("External Cabinet",externalDescription,"vpexternal.shpeuf@gmail.com", external, externalPanels)}
        //extra={email("vpexternal.shpeuf@gmail.com")}
      />
      <Card
        fluid
        image={internal}
        header="Caterina Zientek"
        meta="VP of Internal Affairs"
        extra = {cabinet("Internal Cabinet",internalDescription,"vpinternal.shpeuf@gmail.com", internal, internalPanels)}
        //extra={email("vpinternal.shpeuf@gmail.com")}
      />
    </>
  );
}

export default EBoardCards;
