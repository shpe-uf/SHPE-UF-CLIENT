import React, { Component } from 'react';
import { Accordion, Icon, Segment, Grid, Image, Divider } from 'semantic-ui-react';

const slides = {
  fall2023: {
    I1:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+1+Image.png",
    P1:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+1.pdf",
    I2:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+2+Image.png",
    P2:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+2.pdf",
    I3:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+3+Image.png",
    P3:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+3.pdf",
    I4:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+4+Image.png",
    P4:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+4.pdf",
    I5:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+5+Image.png",
    P5: "https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2023+GBM+5.pdf"
  }
  // fall: {
  //   I1:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+1.png",
  //   P1:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+1.pdf",
  //   I2:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+2.png",
  //   P2:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+2.pdf",
  //   I3:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+3.png",
  //   P3:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+3.pdf",
  //   I4:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+4.png",
  //   P4:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+4.pdf",
  //   I5:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+5.png",
  //   P5:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+5.pdf",
  //   I6:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+6.png",
  //   P6:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Fall+2022+GBM+6.pdf",
  // },
  // spring: {
  //   I1:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+1.png",
  //   P1:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+1.pdf",
  //   I2:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+2.png",
  //   P2:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+2.pdf",
  //   I3:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+3.png",
  //   P3:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+3.pdf",
  //   I4:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+4.png",
  //   P4:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+4.pdf",
  //   I5:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+5.png",
  //   P5:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+5.pdf",
  //   I6:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+6.png",
  //   P6:"https://shpeuf.s3.amazonaws.com/public/resources/GBMSlides/Spring+2023+GBM+6.pdf",
  // }
};

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
            Fall 2023
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <b>GBM 1</b>
              <Divider horizontal/>
              <Image src={slides.fall2023.I1} as="a" size="medium" href={slides.fall2023.P1} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 2</b>
              <Divider horizontal/>
              <Image src={slides.fall2023.I2} as="a" size="medium" href={slides.fall2023.P2} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 3</b>
              <Divider horizontal/>
              <Image src={slides.fall2023.I3} as="a" size="medium" href={slides.fall2023.P3} target="_blank"/>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <b>GBM 4</b>
                <Divider horizontal/>
                <Image src={slides.fall2023.I4} as="a" size="medium" href={slides.fall2023.P4} target="_blank"/>   
              </Grid.Column>
              <Grid.Column>
                <b>GBM 5</b>
                <Divider horizontal/>
                <Image src={slides.fall2023.I5} as="a" size="medium" href={slides.fall2023.P5} target="_blank"/>   
              </Grid.Column>
            </Grid.Row>
        </Grid>
        </Accordion.Content>

        {/* <Accordion.Title
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
              <Image src={slides.fall.I1} as="a" size="medium" href={slides.fall.P1} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 2</b>
              <Divider horizontal/>
              <Image src={slides.fall.I2} as="a" size="medium" href={slides.fall.P2} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 3</b>
              <Divider horizontal/>
              <Image src={slides.fall.I3} as="a" size="medium" href={slides.fall.P3} target="_blank"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <b>GBM 4</b>
              <Divider horizontal/>
              <Image src={slides.fall.I4} as="a" size="medium" href={slides.fall.P4} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 5</b>
              <Divider horizontal/>
              <Image src={slides.fall.I5} as="a" size="medium" href={slides.fall.P5} target="_blank"/>
            </Grid.Column>
            <Grid.Column>
              <b>GBM 6</b>
              <Divider horizontal/>
              <Image src={slides.fall.I6} as="a" size="medium" href={slides.fall.P6} target="_blank"/>   
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
                <Image src={slides.spring.I1} as="a" size="medium" href={slides.spring.P1} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 2</b>
                <Divider horizontal/>
                <Image src={slides.spring.I2} as="a" size="medium" href={slides.spring.P2} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 3</b>
                <Divider horizontal/>
                <Image  src={slides.spring.I3} as="a" size="medium" href={slides.spring.P3} target="_blank"/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
            <Grid.Column>
                <b>GBM 4</b>
                <Divider horizontal/>
                <Image src={slides.spring.I4} as="a" size="medium" href={slides.spring.P4} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 5</b>
                <Divider horizontal/>
                {/*Need to add new file once available*/}
                {/* <Image hidden src={slides.spring.I5} as="a" size="medium" href={slides.spring.P5} target="_blank"/>
              </Grid.Column>
              <Grid.Column>
                <b>GBM 6</b>
                <Divider horizontal/>
                {/*Need to add new file once available*/}
                {/* <Image hidden src={slides.spring.I6} as="a" size="medium" href={slides.spring.P6} target="_blank"/>   
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Accordion.Content>} */}
      </Accordion>
    )
  }
}