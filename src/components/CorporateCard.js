import React from "react";
import { Card, Image, Header } from "semantic-ui-react"

export default function CorporateCard({ corporation, children }) {
    return (
        <Card
            raised
            className='card-team'
        >
            <Image className='corp-logo' src={`${process.env.REACT_APP_CLOUDFRONT_URL}corporation-logos/${corporation.id}`} />
            <Card.Content textAlign='left'>
                <Header>{corporation.name}</Header>
            </Card.Content>
            <Card.Content>
                {children}
            </Card.Content>
        </Card>
    )
}
