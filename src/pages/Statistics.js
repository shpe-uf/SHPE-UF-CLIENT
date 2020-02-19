import React, { useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import {
  Menu,
  Container,
  Responsive,
  Accordion,
  Icon,
  Segment,
  Grid
} from "semantic-ui-react";
import StatisticDisplay from "../components/StatisticDisplay";
import Title from "../components/Title";

import {
  MAJOR_STAT,
  COUNTRY_STAT,
  YEAR_STAT,
  SEX_STAT,
  ETHNICITY_STAT
} from "../util/graphql";

function Statistics() {
  var majorData = useQuery(MAJOR_STAT).data.getMajorStat;
  var countryData = useQuery(COUNTRY_STAT).data.getCountryStat;
  var yearData = useQuery(YEAR_STAT).data.getYearStat;
  var sexData = useQuery(SEX_STAT).data.getSexStat;
  var ethnicityData = useQuery(ETHNICITY_STAT).data.getEthnicityStat;

  const [activeItem, setActiveItem] = useState("Major");

  const handleItemClick = (e, { name }) => {
    if (activeItem === name) {
      setActiveItem(false);
    } else {
      setActiveItem(name);
    }
  };
  return (
    <>
      <Title title="Statistics" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
        <Responsive minWidth={992}>
          <Menu fluid widths={5}>
            <Menu.Item
              name="Major"
              active={activeItem === "Major"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Year"
              active={activeItem === "Year"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Country of Origin"
              active={activeItem === "Country of Origin"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Sex"
              active={activeItem === "Sex"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Ethnicity"
              active={activeItem === "Ethnicity"}
              onClick={handleItemClick}
            />
          </Menu>
          {activeItem === "Major" && (
            <Segment attached="bottom">
              <StatisticDisplay statData={majorData} />
            </Segment>
          )}
          {activeItem === "Year" && (
            <Segment attached="bottom">
              <StatisticDisplay statData={yearData} />
            </Segment>
          )}
          {activeItem === "Country of Origin" && (
            <Segment attached="bottom">
              <StatisticDisplay statData={countryData} />
            </Segment>
          )}
          {activeItem === "Sex" && (
            <Segment attached="bottom">
              <StatisticDisplay statData={sexData} />
            </Segment>
          )}
          {activeItem === "Ethnicity" && (
            <Segment attached="bottom">
              <StatisticDisplay statData={ethnicityData} />
            </Segment>
          )}
        </Responsive>

        <Responsive maxWidth={991}>
          <Accordion fluid styled>
            <Accordion.Title
              name="Major"
              active={activeItem === "Major"}
              onClick={handleItemClick}
            >
              <Icon name="dropdown" />
              Major
            </Accordion.Title>
            <Accordion.Content active={activeItem === "Major"}>
              <StatisticDisplay statData={majorData} />
            </Accordion.Content>

            <Accordion.Title
              name="Year"
              active={activeItem === "Year"}
              onClick={handleItemClick}
            >
              <Icon name="dropdown" />
              Year
            </Accordion.Title>
            <Accordion.Content active={activeItem === "Year"}>
              <StatisticDisplay statData={yearData} />
            </Accordion.Content>

            <Accordion.Title
              name="Country"
              active={activeItem === "Country"}
              onClick={handleItemClick}
            >
              <Icon name="dropdown" />
              Country of Origin
            </Accordion.Title>
            <Accordion.Content active={activeItem === "Country"}>
              <StatisticDisplay statData={countryData} />
            </Accordion.Content>

            <Accordion.Title
              name="Sex"
              active={activeItem === "Sex"}
              onClick={handleItemClick}
            >
              <Icon name="dropdown" />
              Sex
            </Accordion.Title>
            <Accordion.Content active={activeItem === "Sex"}>
              <StatisticDisplay statData={sexData} />
            </Accordion.Content>

            <Accordion.Title
              name="Ethnicity"
              active={activeItem === "Ethnicity"}
              onClick={handleItemClick}
            >
              <Icon name="dropdown" />
              Ethnicity
            </Accordion.Title>
            <Accordion.Content active={activeItem === "Ethnicity"}>
              <StatisticDisplay statData={ethnicityData} />
            </Accordion.Content>
          </Accordion>
        </Responsive>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Statistics;
