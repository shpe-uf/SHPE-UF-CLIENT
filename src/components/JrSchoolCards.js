import React from "react";
import { Card } from "semantic-ui-react";
import emptyImg from "../assets/images/about-1.jpg";

function JrSchoolCards(){
    return (
        <>
        <Card
            image = {emptyImg}
            header = "Sample School 1"
            meta = "Name of school"

        />
        <Card
            image = {emptyImg}
            header = "Sample School 2"
            meta = "Name of school"

        />
        <Card
            image = {emptyImg}
            header = "Sample School 3"
            meta = "Name of school"

        />
        <Card
            image = {emptyImg}
            header = "Sample School 4"
            meta = "Name of school"

        />
        
        </>

    );
}
export default JrSchoolCards;