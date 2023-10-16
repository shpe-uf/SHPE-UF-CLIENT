import React from "react";
import { Card } from "semantic-ui-react";
import emptyImg from "../assets/images/placeholder.png";
import JrSchoolModal from "./JrSchoolModal";

const img1 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/nortonelem.jpg'
const img2 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/idlewild.png'
const img3 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Littlewoodelem.jpeg'
const img4 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/PKyonge.jpg'
const img5 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/pkyHigh.jpg'
const img6 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/cypressBay.jpg'
const img7 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/RonaldReaSr.jpg'
const img8 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Central_High_School_Front.jpg'
const img9 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Materacademyhigh.jpg'

function partnerMod(schoolName, description, pic){
    return JrSchoolModal(schoolName,description,pic);
  }

  const NortonDescription = (
    <div>
        Norton Elementary is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const IdylwildDescription = (
    <div>
        Idylwild Elementary is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const LittlewoodDescription = (
    <div>
        Littlewood Elementary is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const PKYongeDescription = (
    <div>
        PK Yonge Middle School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const PKYongeHDescription = (
    <div>
        PK Yonge High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const CypressBayDescription = (
    <div>
        Cypress Bay High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const RonaldWReaganDescription = (
    <div>
        Ronald W Reagan High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const NorthFloridaCentralDescription = (
    <div>
        North Florida Central High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );
  const MaterAcademyDescription = (
    <div>
        Mater Academy High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with the kids! 
        Check out our K-8 School Events for more info 
    </div>

  );

function JrSchoolCards(){
    return (

        <>
        <Card
            image = {img1}
            header = "Norton"
            meta = "Elementary School"
            extra ={partnerMod(
                "Norton Elementary School",
                NortonDescription,
                img1
            )}

        />
        <Card
            image = {img2}
            header = "Idylwild"
            meta = "Elementary School"
            extra ={partnerMod(
                "Idylwild Elementary School",
                IdylwildDescription,
                img2
            )}

        />
        <Card
            image = {img3}
            header = "Littlewood"
            meta = "Elementary School"
            extra ={partnerMod(
                "Littlewood Elementary School",
                LittlewoodDescription,
                img3
            )}

        />
        <Card
            image = {img4}
            header = "PK Yonge"
            meta = "Middle School"
            extra ={partnerMod(
                "PK Yonge Middle School",
                PKYongeDescription,
                img4
            )}
        /> 
        <Card
            image = {img5}
            header = "PK Yonge"
            meta = "High School"
            extra ={partnerMod(
                "PK Yonge High School",
                PKYongeHDescription,
                img5
            )}
        />
         <Card
            image = {img6}
            header = "Cypress Bay High"
            meta = "High School"
            extra ={partnerMod(
                "Cypress Bay High School",
                CypressBayDescription,
                img6
            )}
        />
         <Card
            image = {img7}
            header = "Ronald W Reagan"
            meta = "High School"
            extra ={partnerMod(
                "Ronald W Reagan High School",
                RonaldWReaganDescription,
                img7
            )}
        />
         <Card
            image = {img8}
            header = "North Florida Central"
            meta = "High School"
            extra ={partnerMod(
                "North Florida Central High School",
                NorthFloridaCentralDescription,
                img8
            )}
        />

         <Card
            image = {img9}
            header = "Mater Academy"
            meta = "High School"
            extra ={partnerMod(
                "Mater Academy High School",
                MaterAcademyDescription,
                img9
            )}
        />
        </>

    );
}
export default JrSchoolCards;