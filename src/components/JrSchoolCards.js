import React from "react";
import { Card } from "semantic-ui-react";
import emptyImg from "../assets/images/placeholder.png";
import JrSchoolModal from "./JrSchoolModal";

const img1 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Norton.jpg'
const img2 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Idylwild.png'
const img3 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/PKyonge.jpg'
const img4 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Hialeah_Gardens_High.jpg'
const img5 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/pkyHigh.jpg'
const img6 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Cypress_Bay.jpg'
const img7 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/Central_High_School_Front.jpg'

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
        hosts events such as STEM days with the kids. SHPE UF also has a 1-on-1
        mentorship program with Idywild Students!
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
  const HialeahGardensDescription = (
    <div>
        Hialeah Gardens High School is located in Hialeah, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with their students! 
        Check out our High School Events for more info 
    </div>
  );
  const PKYongeHDescription = (
    <div>
        PK Yonge High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts STEM events with their students!
        Check out our High School Events for more info 
    </div>

  );
  const CypressBayDescription = (
    <div>
        Cypress Bay High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with their students. SHPE UF also has a 1-on-1 
        Mentorship program with Cypress Bay students!
        Check out our High School Events for more info 
    </div>

  );
  const NorthCentralFloridaDescription = (
    <div>
        North Central Florida High School is located in Gainesville, Florida. Our SHPEJr chapter 
        hosts events such as STEM days with their students! 
        Check out our High School Events for more info 
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
            header = "PK Yonge Middle"
            meta = "Middle School"
            extra ={partnerMod(
                "PK Yonge Middle School",
                PKYongeDescription,
                img3
            )}
        /> 
        <Card
            image = {img4}
            header = "Hialeah Gardens"
            meta = "High School"
            extra ={partnerMod(
                "Hialeah Gardens High School",
                HialeahGardensDescription,
                img4
            )}
        />
        <Card
            image = {img5}
            header = "PK Yonge High"
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
            header = "North Central Florida"
            meta = "High School"
            extra ={partnerMod(
                "North Central Florida High School",
                NorthCentralFloridaDescription,
                img7
            )}
        />
         
        </>
    );
}
export default JrSchoolCards;