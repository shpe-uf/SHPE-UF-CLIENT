import React from "react";
import { Card, Dropdown, Grid, Icon, Image } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { FETCH_RESOURCES_QUERY } from "../util/graphql";

import eboard from "../assets/eboard";

const National = "https://shpeuf.s3.amazonaws.com/public/resources/national.jpg";
const NewMember = "https://shpeuf.s3.amazonaws.com/public/resources/newmember.jpeg";
const WhatsApp = "https://shpeuf.s3.amazonaws.com/public/resources/whatsapp.png";
const InfoSlides = "https://shpeuf.s3.amazonaws.com/public/resources/info.jpg";
const GBM = "https://shpeuf.s3.amazonaws.com/public/misc/gbm.JPG";


const EBoardOptions = [
    {
        key: eboard.president.name,
        text: <a href={"mailto:" + eboard.president.email} className="link-email">
            <Image src={eboard.president.image} avatar />
            <Icon name="mail" />
            {eboard.president.name}
        </a>,
        value: eboard.president.name,
    },
    {
        key: eboard.research.name,
        text: <a href={"mailto:" + eboard.research.email} className="link-email">
            <Image src={eboard.research.image} avatar />
            <Icon name="mail" />
            {eboard.research.name}
        </a>,
        value: eboard.research.name,
    },
    {
        key: eboard.secretary.name,
        text: <a href={"mailto:" + eboard.secretary.email} className="link-email">
            <Image src={eboard.secretary.image} avatar />
            <Icon name="mail" />
            {eboard.secretary.name}
        </a>,
        value: eboard.secretary.name,
    },
    {
        key: eboard.treasurer.name,
        text: <a href={"mailto:" + eboard.treasurer.email} className="link-email">
            <Image src={eboard.treasurer.image} avatar />
            <Icon name="mail" />
            {eboard.treasurer.name}
        </a>,
        value: eboard.treasurer.name,
    },
    {
        key: eboard.marketing.name,
        text: <a href={"mailto:" + eboard.marketing.email} className="link-email">
            <Image src={eboard.marketing.image} avatar />
            <Icon name="mail" />
            {eboard.marketing.name}
        </a>,
        value: eboard.marketing.name,
    },
    {
        key: eboard.technology.name,
        text: <a href={"mailto:" + eboard.technology.email} className="link-email">
            <Image src={eboard.technology.image} avatar />
            <Icon name="mail" />
            {eboard.technology.name}
        </a>,
        value: eboard.technology.name,
    },
    {
        key: eboard.corporate.name,
        text: <a href={"mailto:" + eboard.corporate.email} className="link-email">
            <Image src={eboard.corporate.image} avatar />
            <Icon name="mail" />
            {eboard.corporate.name}
        </a>,
        value: eboard.corporate.name,
    },
    {
        key: eboard.external.name,
        text: <a href={"mailto:" + eboard.external.email} className="link-email">
            <Image src={eboard.external.image} avatar />
            <Icon name="mail" />
            {eboard.external.name}
        </a>,
        value: eboard.external.name,
    },
    {
        key: eboard.internal.name,
        text: <a href={"mailto:" + eboard.internal.email} className="link-email">
            <Image src={eboard.internal.image} avatar />
            <Icon name="mail" />
            {eboard.internal.name}
        </a>,
        value: eboard.internal.email,
    },
]

function ResourcesCards() {

    let resourcesQuery = useQuery(FETCH_RESOURCES_QUERY, {});
    let data = resourcesQuery.data;
    let loading = resourcesQuery.loading;
    let resources = [];

    if (data && data.getResources) {
        resources = data.getResources
    }
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
                image={<Image src={NewMember} as="a" href="https://forms.gle/umEMS2BWJb5stXM78" target="_blank" />}
                header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://forms.gle/umEMS2BWJb5stXM78" target="_blank">New Member Interest Form</a>}</Grid.Column></Grid>}
                description="Fill this out if you are interested in learning more about becoming a member of SHPE UF."
                extra={<a class="extra" href="https://forms.gle/umEMS2BWJb5stXM78" target="_blank">Fill out the form here!</a>}
            />
            <Card
                image={<Image src={GBM} as="a" href="https://recruitmentshpeuf.wixsite.com/shpeuf-recruitment" target="_blank" />}
                header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://recruitmentshpeuf.wixsite.com/shpeuf-recruitment" target="_blank">New Member Website</a>}</Grid.Column></Grid>}
                description="Find many additional resources and information if you are interested in becoming a member."
                extra={<a class="extra" href="https://recruitmentshpeuf.wixsite.com/shpeuf-recruitment" target="_blank">Click here to access the site!</a>}
            />
            <Card
                image={<Image src={National} as="a" href="https://shpe.org/membership/become-a-member/" target="_blank" />}
                header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://shpe.org/membership/become-a-member/" target="_blank">National Membership</a>}</Grid.Column></Grid>}
                description="While it is not required for all members, there are many benefits to having SHPE National Membership."
                extra={<a class="extra" href="https://shpe.org/membership/become-a-member/" target="_blank">Register for SHPE National Membership here!</a>}
            />
            <Card
                image={<Image src={WhatsApp} as="a" href="https://chat.whatsapp.com/KyuEjmCLT7c1VRSkexoQkO" target="_blank" />}
                header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://chat.whatsapp.com/KyuEjmCLT7c1VRSkexoQkO" target="_blank">SHPE UF Announcements Chat</a>}</Grid.Column></Grid>}
                description="Join the SHPE UF WhatsApp chat to stay up to date with all SHPE UF news and events."
                extra={<a class="extra" href="https://chat.whatsapp.com/KyuEjmCLT7c1VRSkexoQkO" target="_blank">Click here to access the site!</a>}
            />
            <Card
                image={<Image src={InfoSlides} as="a" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf" target="_blank" />}
                header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf" target="_blank">SHPE UF Info Slides</a>}</Grid.Column></Grid>}
                description="Check out our SHPE UF: Info Slides to learn more about the programs, events, and opportunities SHPE UF has to offer!"
                extra={<a class="extra" href="https://28d1f378-e21f-4379-a063-11326d549c54.filesusr.com/ugd/4f1a8d_68ff9284c7dd40658aa324292ece1ac9.pdf" target="_blank">Click here to download the slides!</a>}
            />
            {resources.map((resource) => (
                <Card
                    image={<Image src={resource.image} as="a" href={resource.link} target="_blank" />}
                    header={<Grid><Grid.Column textAlign="center">{<a className="ui header" href={resource.link} target="_blank">{resource.title}</a>}</Grid.Column></Grid>}
                    description={resource.description}
                ></Card>
            ))}
        </>
    );
}

export default ResourcesCards;