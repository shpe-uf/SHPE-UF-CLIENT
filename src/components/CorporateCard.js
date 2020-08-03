import React from "react";
import {Card, Image, Header} from "semantic-ui-react"

export default function CorporateCard ({corporation,children}) {
    return (
        <Card 
            raised
            className='card-team'
        >
            <Image className='corp-logo' fill src={corporation.logo}/>
            <Card.Content>
                <Header>{corporation.name}</Header>
            </Card.Content>
            <Card.Content>
                {children}
            </Card.Content>
        </Card>
    )
}