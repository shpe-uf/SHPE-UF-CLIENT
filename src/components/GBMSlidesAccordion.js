import React, { Component } from "react";
import { Accordion, Icon, Grid, Image, Divider } from "semantic-ui-react";

// The slides data structure
const slides = {
  "Spring 2026": [
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Spring+2026+GBM+1.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Spring+2026+GBM+1.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Spring+2026+GBM+2.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Spring+2026+GBM+2.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Spring+2026+GBM+3.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Spring+2026+GBM+3.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Spring+2026+GBM+4.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Spring+2026+GBM+4.pdf",
    },
  ],
  "Fall 2025": [
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+1.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+1.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+2+.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+2.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+3.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+3.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+4.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+4.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+5.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+5.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+6.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+6.pdf",
    },
    {
      image: 
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+7.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+7.pdf",
    },
    {
      image:
        "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/covers/Fall+2025+GBM+8.png",
      pdf: "https://shpeuf.s3.us-east-1.amazonaws.com/public/resources/GBMSlides/Fall+2025+GBM+8.pdf",
    },
  ],
};

export default class GBMSlidesAccordion extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const { semesterYear } = this.props;

    // Get the slides for the specified semester
    const semesterSlides = slides[semesterYear];

    if (!semesterSlides) {
      return <p>No slides found for {semesterYear}</p>;
    }

    return (
      <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          {semesterYear}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Grid>
            <Grid.Row columns={3}>
              {semesterSlides.map((slide, index) => (
                <Grid.Column key={index}>
                  <b>GBM {index + 1}</b>
                  <Divider horizontal />
                  <Image
                    src={slide.image}
                    as="a"
                    size="medium"
                    href={slide.pdf}
                    target="_blank"
                  />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Accordion.Content>
      </Accordion>
    );
  }
}
