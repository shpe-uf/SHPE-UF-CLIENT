import React from "react";
import { Card } from "semantic-ui-react";
import emptyImg from "../assets/images/about-1.jpg";
import JrSchoolModal from "./JrSchoolModal";

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
            image = {emptyImg}
            header = "Norton"
            meta = "Elementary School"
            extra ={partnerMod(
                "Norton Elementary School",
                NortonDescription,
                emptyImg
            )}

        />
        <Card
            image = {emptyImg}
            header = "Idylwild"
            meta = "Elementary School"
            extra ={partnerMod(
                "Idylwild Elementary School",
                IdylwildDescription,
                emptyImg
            )}

        />
        <Card
            image = {emptyImg}
            header = "Littlewood"
            meta = "Elementary School"
            extra ={partnerMod(
                "Littlewood Elementary School",
                LittlewoodDescription,
                emptyImg
            )}

        />
        <Card
            image = {emptyImg}
            header = "PK Yonge"
            meta = "Middle School"
            extra ={partnerMod(
                "PK Yonge Middle School",
                PKYongeDescription,
                emptyImg
            )}
        /> 
        <Card
            image = {emptyImg}
            header = "PK Yonge"
            meta = "High School"
            extra ={partnerMod(
                "PK Yonge High School",
                PKYongeHDescription,
                emptyImg
            )}
        />
         <Card
            image = {emptyImg}
            header = "Cypress Bay High"
            meta = "High School"
            extra ={partnerMod(
                "Cypress Bay High School",
                CypressBayDescription,
                emptyImg
            )}
        />
         <Card
            image = {emptyImg}
            header = "Ronald W Reagan"
            meta = "High School"
            extra ={partnerMod(
                "Ronald W Reagan High School",
                RonaldWReaganDescription,
                emptyImg
            )}
        />
         <Card
            image = {emptyImg}
            header = "North Florida Central"
            meta = "High School"
            extra ={partnerMod(
                "North Florida Central High School",
                NorthFloridaCentralDescription,
                emptyImg
            )}
        />
        
         <Card
            image = {emptyImg}
            header = "Mater Academy"
            meta = "High School"
            extra ={partnerMod(
                "Mater Academy High School",
                MaterAcademyDescription,
                emptyImg
            )}
        />
        </>

    );
}
export default JrSchoolCards;