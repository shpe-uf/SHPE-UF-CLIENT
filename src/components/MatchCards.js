import React from "react";
import { Card, Image, Label } from "semantic-ui-react";
import placeholder from "../assets/images/team/placeholder.png";


function MatchCards({ getMatches, getClasses }) {

    var filteredRes = [];

    return (
        <>
        {getMatches.map(matchTemp => (
        <Card>
          <Card.Content>
            <Card.Header textAlign='center' style={{height:'62px'}}>
              {matchTemp.firstName + " " + matchTemp.lastName}
            </Card.Header>
            {matchTemp.photo == "" ? <Image src={placeholder} wrapped ui={true} bordered></Image> : 
            <Image src= {matchTemp.photo} wrapped ui={true} bordered></Image>}
            <p></p>
              <Label.Group>
              {matchTemp.classes.map(codeName => (
                filteredRes = getClasses.filter(classTemp => classTemp.code == codeName.code),
                filteredRes.length > 0 ?
                <Label color="text-white label-Color-Orange">
                  {codeName.code}
                </Label> : 
                <Label className="text-white label-Color-Blue">
                  {codeName.code}
                </Label>
            ))}</Label.Group>
          </Card.Content>
          <Card.Content extra>
              <p>{matchTemp.major}</p>
              <p>{matchTemp.year}</p>
              <a
                href={"mailto:" + matchTemp.email}
                className="link-email"
              >
                {matchTemp.email}
              </a>
          </Card.Content>
        </Card>
      ))}
      </>
      );
}

export default MatchCards;