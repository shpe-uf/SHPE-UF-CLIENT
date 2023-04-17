import React from "react";
import { Card, Dropdown, Grid, Icon, Image } from "semantic-ui-react";

import GBM from "../assets/images/resources/gbm2.JPG"
import EBoard from "../assets/images/eboard.jpg";
import National from "../assets/images/resources/national.jpg"
import NewMember from "../assets/images/resources/newmember.jpeg"
import WhatsApp from "../assets/images/resources/whatsapp.png"
import InfoSlides from "../assets/images/resources/info.jpg"

import Pres from '../assets/images/eboard/president.jpeg'
import Grad from '../assets/images/eboard/graduate.jpeg'
import Sec from '../assets/images/eboard/secretary.jpeg'
import Tres from '../assets/images/eboard/treasurer.jpeg'
import Mark from '../assets/images/eboard/marketing.jpeg'
import Tech from '../assets/images/eboard/technology.jpeg'
import Corp from '../assets/images/eboard/corporate.jpeg'
import VPe from '../assets/images/eboard/external.jpeg'
import VPi from '../assets/images/eboard/internal.jpeg'


const EBoardOptions = [
    {
      key: 'Jorge Moros',
      text: <a href={"mailto:" + "president.shpeuf@gmail.com"} className="link-email">
                <Image src={Pres} avatar/>
                <Icon name="mail" />
                Jorge Moros 
            </a>,
      value: 'Jorge Moros',
    },
    {
      key: 'Juan Valderrama',
      text: <a href={"mailto:" + "graduate.shpeuf@gmail.com"} className="link-email">
                <Image src={Grad} avatar/>
                <Icon name="mail" />
                Juan Valderrama
            </a>,
      value: 'Juan Valderrama',
    },
    {
      key: 'Bianca Piñeros',
      text: <a href={"mailto:" + "secretary.shpeuf@gmail.com"} className="link-email">
                <Image src={Sec} avatar/>
                <Icon name="mail" />
                Bianca Piñeros
            </a>,
      value: 'Bianca Piñeros',
    },
    {
      key: 'Frank Vigoa',
      text: <a href={"mailto:" + "treasurer.shpeuf@gmail.com"} className="link-email">
                <Image src={Tres} avatar/>
                <Icon name="mail" />
                Frank Vigoa
            </a>,
      value: 'Frank Vigoa',
    },
    {
      key: 'Victor Rodriguez',
      text: <a href={"mailto:" + "marketing.shpeuf@gmail.com"} className="link-email">
                <Image src={Mark} avatar/>
                <Icon name="mail" />
                Victor Rodriguez
            </a>,
      value: 'Victor Rodriguez',
    },
    {
      key: 'Mariana Torres Torres',
      text: <a href={"mailto:" + "vptech.shpeuf@gmail.com"} className="link-email">
                <Image src={Tech} avatar/>
                <Icon name="mail" />
                Mariana Torres Torres
            </a>,
      value: 'Mariana Torres Torres',
    },
    {
        key: 'Paige Sam',
        text:   <a href={"mailto:" + "corporate.shpeuf@gmail.com"} className="link-email">
                    <Image src={Corp} avatar/>
                    <Icon name="mail" />
                    Paige Sam
                </a>,
        value: 'Paige Sam',
    },
    {
        key: 'Isabella Eby',
        text:   <a href={"mailto:" + "vpexternal.shpeuf@gmail.com"} className="link-email">
                    <Image src={VPe} avatar/>
                    <Icon name="mail" />
                    Isabella Eby
                </a>,
        value: 'Isabella Eby',
    },
    {
        key: 'Katie Muratti',
        text:   <a href={"mailto:" + "vpinternal.shpeuf@gmail.com"} className="link-email">
                    <Image src={VPi} avatar/>
                    <Icon name="mail" />
                    Katie Muratti
                </a>,
        value: 'Katie Muratti',
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
            extra=<a class="extra" href="https://shpe.org/membership/become-a-member/" target="_blank">Register for SHPE National Membership here!</a>
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