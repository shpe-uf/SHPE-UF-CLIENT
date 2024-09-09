import React, { Children } from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import JrTabs from "../../components/ShpeJr/JrTabs";

function ShpeJr(){

    return (
        <div className="body">
      <div className="masthead masthead-about">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">SHPE Jr</h1>
          </Container>
        </div>
      </div>
        <Container>
            <div align = "center">
                <h2 >Welcome</h2>
                <p style={{color:'rgb(0, 77, 115)', fontWeight:'bold', fontSize:'85px'}}>
                  SHPE Jr. is our organization’s K-12 outreach program, which aims to increase 
                  student awareness and interest in STEM among various elementary, middle, 
                  and high schools across Florida. Through interactive STEM workshops,
                   presentations, and student mentoring, we hope to incentivize our future 
                   generation to pursue careers within science and engineering. With the help
                    of our SHPE volunteers, we host various different events every month in 
                    our partner schools. Join us today!
                </p>
                <Button as={Link} to="https://linktr.ee/SHPEJr_UF">SHPE Jr Linktree</Button>

                
            </div>
       
        </Container>
        <div>
          <JrTabs />
        </div>
        
      </div>


    );

  }


export default ShpeJr;