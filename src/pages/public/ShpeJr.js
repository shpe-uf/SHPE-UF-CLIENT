import React from "react";
import { Container, Grid, Image, Menu, Responsive } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { useState } from "react";

function ShpeJr(){
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

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
                <p style={{color:'rgb(0, 77, 115)', fontWeight:'bold', fontSize:'85px'}}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat!
                    This will be text Isa wants for the welcome message </p>
            </div>
      
        </Container>
        <div>
          <Menu pointing secondary>
          <Menu.Item
        name="Home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
        <Menu.Item
        name="About"
        active={activeItem === 'about'}
        onClick={handleItemClick}
        as={Link}
        to="/About"
      />
      <Menu.Item
        name="ShadowSHPE"
        active={activeItem === 'ShadowSHPE'}
        onClick={handleItemClick}
        as={Link}
        to="/SHPEJr"
      />
          </Menu>
          
        </div>




      </div>


    );

  }

export default ShpeJr;