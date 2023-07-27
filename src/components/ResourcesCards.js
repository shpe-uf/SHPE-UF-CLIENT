import React from "react";
import { Card, Dropdown, Grid, Icon, Image } from "semantic-ui-react";

import eboard from "../assets/images/eboard";

const National = "https://shpeuf.s3.amazonaws.com/public/resources/national.jpg";
const NewMember = "https://shpeuf.s3.amazonaws.com/public/resources/newmember.jpeg";
const WhatsApp = "https://shpeuf.s3.amazonaws.com/public/resources/whatsapp.png";
const InfoSlides = "https://shpeuf.s3.amazonaws.com/public/resources/info.jpg";
const GBM = "https://shpeuf.s3.amazonaws.com/public/misc/gbm.JPG";

const EBoardOptions = [
    {
      key: eboard.president[0],
      text: <a href={"mailto:" + "president.shpeuf@gmail.com"} className="link-email">
                <Image src={eboard.president[1]} avatar/>
                <Icon name="mail" />
                {eboard.president[0]} 
            </a>,
      value: eboard.president[0],
    },
    {
      key: eboard.graduate[0],
      text: <a href={"mailto:" + "graduate.shpeuf@gmail.com"} className="link-email">
                <Image src={eboard.graduate[1]} avatar/>
                <Icon name="mail" />
                {eboard.graduate[0]}
            </a>,
      value: eboard.graduate[0],
    },
    {
      key: eboard.secretary[0],
      text: <a href={"mailto:" + "secretary.shpeuf@gmail.com"} className="link-email">
                <Image src={eboard.secretary[1]} avatar/>
                <Icon name="mail" />
                {eboard.secretary[0]}
            </a>,
      value: eboard.secretary[0],
    },
    {
      key: eboard.treasurer[0],
      text: <a href={"mailto:" + "treasurer.shpeuf@gmail.com"} className="link-email">
                <Image src={eboard.treasurer[1]} avatar/>
                <Icon name="mail" />
                {eboard.treasurer[0]}
            </a>,
      value: eboard.treasurer[0],
    },
    {
      key: eboard.marketing[0],
      text: <a href={"mailto:" + "marketing.shpeuf@gmail.com"} className="link-email">
                <Image src={eboard.marketing[1]} avatar/>
                <Icon name="mail" />
                {eboard.marketing[0]}
            </a>,
      value: eboard.marketing[0],
    },
    {
      key: eboard.technology[0],
      text: <a href={"mailto:" + "vptech.shpeuf@gmail.com"} className="link-email">
                <Image src={eboard.technology[1]} avatar/>
                <Icon name="mail" />
                {eboard.technology[0]}
            </a>,
      value: eboard.technology[0],
    },
    {
        key: eboard.corporate[0],
        text:   <a href={"mailto:" + "corporate.shpeuf@gmail.com"} className="link-email">
                    <Image src={eboard.corporate[1]} avatar/>
                    <Icon name="mail" />
                    {eboard.corporate[0]}
                </a>,
        value: eboard.corporate[0],
    },
    {
        key: eboard.external[0],
        text:   <a href={"mailto:" + "vpexternal.shpeuf@gmail.com"} className="link-email">
                    <Image src={eboard.external[1]} avatar/>
                    <Icon name="mail" />
                    {eboard.external[0]}
                </a>,
        value: eboard.external[0],
    },
    {
        key: eboard.internal[0],
        text:   <a href={"mailto:" + "vpinternal.shpeuf@gmail.com"} className="link-email">
                    <Image src={eboard.internal[1]} avatar/>
                    <Icon name="mail" />
                    {eboard.internal[0]}
                </a>,
        value: eboard.internal[1],
    },
  ]

function ResourcesCards() {
    return (
        <>
        <Card 
            image={eboard.eboard}
            header={<Grid><Grid.Column textAlign="center">{<a className="ui header">EBoard Contact</a>}</Grid.Column></Grid>}
            description="Email members of the E-Board."
            extra={<Dropdown
                    placeholder='Select Member to Email'
                    fluid
                    selection
                    options={EBoardOptions}    
                />}
        />
        <Card 
            image={<Image src={NewMember} as="a" href="https://forms.gle/umEMS2BWJb5stXM78" target="_blank"/>}
            header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://forms.gle/umEMS2BWJb5stXM78" target="_blank">New Member Interest Form</a>}</Grid.Column></Grid>}
            description="Fill this out if you are interested in learning more about becoming a member of SHPE UF."
            extra={<a class="extra" href="https://forms.gle/umEMS2BWJb5stXM78" target="_blank">Fill out the form here!</a>}
        />
        <Card 
            image={<Image src={GBM} as="a" href="https://recruitmentshpeuf.wixsite.com/shpeuf-recruitment" target="_blank"/>}
            header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://recruitmentshpeuf.wixsite.com/shpeuf-recruitment" target="_blank">New Member Website</a>}</Grid.Column></Grid>}
            description="Find many additional resources and information if you are interested in becoming a member."
            extra={<a class="extra" href="https://recruitmentshpeuf.wixsite.com/shpeuf-recruitment" target="_blank">Click here to access the site!</a>}
        />
        <Card 
            image={<Image src={National} as="a" href="https://shpe.org/membership/become-a-member/" target="_blank"/>}
            header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://shpe.org/membership/become-a-member/" target="_blank">National Membership</a>}</Grid.Column></Grid>}
            description="While it is not required for all members, there are many benefits to having SHPE National Membership."
            extra={<a class="extra" href="https://shpe.org/membership/become-a-member/" target="_blank">Register for SHPE National Membership here!</a>}
        />
        <Card 
            image={<Image src={WhatsApp} as="a" href="https://chat.whatsapp.com/KyuEjmCLT7c1VRSkexoQkO" target="_blank"/>}
            header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://chat.whatsapp.com/KyuEjmCLT7c1VRSkexoQkO" target="_blank">SHPE UF Announcements Chat</a>}</Grid.Column></Grid>}
            description="Join the SHPE UF WhatsApp chat to stay up to date with all SHPE UF news and events."
            extra={<a class="extra" href="https://chat.whatsapp.com/KyuEjmCLT7c1VRSkexoQkO" target="_blank">Click here to access the site!</a>}
        />
        <Card 
            image={<Image src={InfoSlides} as="a" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf" target="_blank"/>}
            header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf" target="_blank">SHPE UF Info Slides</a>}</Grid.Column></Grid>}
            description="Check out our SHPE UF: Info Slides to learn more about the programs, events, and opportunities SHPE UF has to offer!"
            extra={<a class="extra" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf" target="_blank">Click here to download the slides!</a>}
        />
        </>
    );
}

export default ResourcesCards;