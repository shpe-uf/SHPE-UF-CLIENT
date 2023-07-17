import React from "react";
import { Card, Dropdown, Grid, Icon, Image } from "semantic-ui-react";

import GBM from "../assets/images/resources/gbm.JPG"
import EBoard from "../assets/images/eboard.jpg";
import National from "../assets/images/resources/national.jpg"
import NewMember from "../assets/images/resources/newmember.jpeg"
import WhatsApp from "../assets/images/resources/whatsapp.png"
import InfoSlides from "../assets/images/resources/info.jpg"

import {president, graduate, secretary, treasurer, marketing, technology, corporate, external, internal} from "../assets/images/eboard"

const EBoardOptions = [
    {
      key: president[0],
      text: <a href={"mailto:" + "president.shpeuf@gmail.com"} className="link-email">
                <Image src={president[1]} avatar/>
                <Icon name="mail" />
                {president[0]} 
            </a>,
      value: president[0],
    },
    {
      key: graduate[0],
      text: <a href={"mailto:" + "graduate.shpeuf@gmail.com"} className="link-email">
                <Image src={graduate[1]} avatar/>
                <Icon name="mail" />
                {graduate[0]}
            </a>,
      value: graduate[0],
    },
    {
      key: secretary[0],
      text: <a href={"mailto:" + "secretary.shpeuf@gmail.com"} className="link-email">
                <Image src={secretary[1]} avatar/>
                <Icon name="mail" />
                {secretary[0]}
            </a>,
      value: secretary[0],
    },
    {
      key: treasurer[0],
      text: <a href={"mailto:" + "treasurer.shpeuf@gmail.com"} className="link-email">
                <Image src={treasurer[1]} avatar/>
                <Icon name="mail" />
                {treasurer[0]}
            </a>,
      value: treasurer[0],
    },
    {
      key: marketing[0],
      text: <a href={"mailto:" + "marketing.shpeuf@gmail.com"} className="link-email">
                <Image src={marketing[1]} avatar/>
                <Icon name="mail" />
                {marketing[0]}
            </a>,
      value: marketing[0],
    },
    {
      key: technology[0],
      text: <a href={"mailto:" + "vptech.shpeuf@gmail.com"} className="link-email">
                <Image src={technology[1]} avatar/>
                <Icon name="mail" />
                {technology[0]}
            </a>,
      value: technology[0],
    },
    {
        key: corporate[0],
        text:   <a href={"mailto:" + "corporate.shpeuf@gmail.com"} className="link-email">
                    <Image src={corporate[1]} avatar/>
                    <Icon name="mail" />
                    {corporate[0]}
                </a>,
        value: corporate[0],
    },
    {
        key: external[0],
        text:   <a href={"mailto:" + "vpexternal.shpeuf@gmail.com"} className="link-email">
                    <Image src={external[1]} avatar/>
                    <Icon name="mail" />
                    {external[0]}
                </a>,
        value: external[0],
    },
    {
        key: internal[0],
        text:   <a href={"mailto:" + "vpinternal.shpeuf@gmail.com"} className="link-email">
                    <Image src={internal[1]} avatar/>
                    <Icon name="mail" />
                    {internal[0]}
                </a>,
        value: internal[1],
    },
  ]

function ResourcesCards() {
    return (
        <>
        <Card 
            image={EBoard}
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