import React from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok} from "react-icons/bi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Media } from "../Media"

function Footer() {
  return (
    <footer>
      <Media greaterThanOrEqual="computer">
        <Container>
          <Grid>
            <Grid.Row className="no-padding">
              <Grid.Column width={8}>
              <a
                  href="https://tiktok.com/@byshpeitos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                <BiLogoTiktok size={25} style={{ color: '#FD652F', size: 500}}/>
                </a>
                <a
                  href="https://www.instagram.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                  <AiFillInstagram size={25} style={{ color: '#FD652F'}}/>
                </a>
                <a
                  href="https://www.linkedin.com/company/shpeuf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                  <FaLinkedin size={25} style={{ color: '#FD652F'}}/>
                </a>
                <a
                  href="https://www.facebook.com/groups/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={25} style={{ color: '#FD652F'}}/>
                </a>
              </Grid.Column>
              <Grid.Column width={8} textAlign="right">
                <p>© Copyright 2023. All Rights Reserved.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Media>

      <Media lessThan="computer">
        <Container>
          <Grid>
            <Grid.Row className="row-footer-mobile">
              <Grid.Column textAlign="center" width={16}>
                <a
                  href="https://tiktok.com/@byshpeitos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                <BiLogoTiktok size={25} style={{ color: '#FD652F', size: 500}}/>
                </a>
                <a
                  href="https://www.instagram.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                  <AiFillInstagram size={25} style={{ color: '#FD652F'}}/>
                </a>
                <a
                  href="https://www.linkedin.com/company/shpeuf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                  <FaLinkedin size={25} style={{ color: '#FD652F'}}/>
                </a>
                <a
                  href="https://www.facebook.com/groups/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px' }}
                >
                  <FaFacebook size={25} style={{ color: '#FD652F'}}/>
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="row-footer-mobile">
              <Grid.Column textAlign="center" width={16}>
                <p>© Copyright 2023. All Rights Reserved.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Media>
    </footer>
  );
}

export default Footer;

