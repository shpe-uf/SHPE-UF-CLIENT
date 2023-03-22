import React, { Component } from 'react'
import { Accordion, Icon, Segment, Grid, Image, Divider } from 'semantic-ui-react'

import Fall22I1 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 1.png"
import Fall22P1 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 1.pdf"
import Fall22I2 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 2.png"
import Fall22P2 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 2.pdf"
import Fall22I3 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 3.png"
import Fall22P3 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 3.pdf"
import Fall22I4 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 4.png"
import Fall22P4 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 4.pdf"
import Fall22I5 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 5.png"
import Fall22P5 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 5.pdf"
import Fall22I6 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 6.png"
import Fall22P6 from "../assets/images/resources/GBMSlides/Fall 2022 GBM 6.pdf"
import Spring23I1 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 1.png"
import Spring23P1 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 1.pdf"
import Spring23I2 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 2.png"
import Spring23P2 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 2.pdf"
import Spring23I3 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 3.png"
import Spring23P3 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 3.pdf"
import Spring23I4 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 4.png"
import Spring23P4 from "../assets/images/resources/GBMSlides/Spring 2023 GBM 4.pdf"

{/*TODO: switch pdf files with links to slides */}
export default class GBMSlidesAccordion extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
            <Icon name='dropdown' />
            Fall 2022
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <b>GBM 1</b>
              <Divider horizontal/>
              <Image src={Fall22I1} as="a" size="medium" href={Fall22P1} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 2</b>
              <Divider horizontal/>
              <Image src={Fall22I2} as="a" size="medium" href={Fall22P2} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 3</b>
              <Divider horizontal/>
              <Image src={Fall22I3} as="a" size="medium" href={Fall22P3} target="_blank"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <b>GBM 4</b>
              <Divider horizontal/>
              <Image src={Fall22I4} as="a" size="medium" href={Fall22P4} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 5</b>
              <Divider horizontal/>
              <Image src={Fall22I5} as="a" size="medium" href={Fall22P5} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 6</b>
              <Divider horizontal/>
              <Image src={Fall22I6} as="a" size="medium" href={Fall22P6} target="_blank"/>   
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
            <Icon name='dropdown' />
            Spring 2023
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <b>GBM 1</b>
                <Divider horizontal/>
                <Image src={Spring23I1} as="a" size="medium" href={Spring23P1} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 2</b>
                <Divider horizontal/>
                <Image src={Spring23I2} as="a" size="medium" href={Spring23P2} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 3</b>
                <Divider horizontal/>
                <Image  src={Spring23I3} as="a" size="medium" href={Spring23P3} target="_blank"/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
            <Grid.Column>
                <b>GBM 4</b>
                <Divider horizontal/>
                <Image src={Spring23I4} as="a" size="medium" href={Spring23P4} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 5</b>
                <Divider horizontal/>
                {/*Need to add new file once available*/}
                <Image hidden src={Spring23I1} as="a" size="medium" href={Spring23P1} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 6</b>
                <Divider horizontal/>
                {/*Need to add new file once available*/}
                <Image hidden src={Spring23I1} as="a" size="medium" href={Spring23P1} target="_blank"/>   
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Accordion.Content>
      </Accordion>
    )
  }
}
