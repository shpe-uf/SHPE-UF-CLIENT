import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import {
  Menu,
  Container,
  Accordion,
  Icon,
  Segment,
  Grid,
} from "semantic-ui-react";
import { Media } from "../Media";
import StatisticDisplay from "../components/StatisticDisplay";
import Title from "../components/Title";

import {
  MAJOR_STAT,
  COUNTRY_STAT,
  YEAR_STAT,
  SEX_STAT,
  ETHNICITY_STAT,
} from "../util/graphql";

function Statistics() {
  let majorQuery = useQuery(MAJOR_STAT);
  let majorData = majorQuery.data;
  if (majorData) {
    majorData = majorData.getMajorStat;
  }

  let yearQuery = useQuery(YEAR_STAT);
  let yearData = yearQuery.data;
  if (yearData) {
    yearData = yearData.getYearStat;
  }

  let countryQuery = useQuery(COUNTRY_STAT);
  let countryData = countryQuery.data;
  if (countryData) {
    countryData = countryData.getCountryStat;
  }

  let sexQuery = useQuery(SEX_STAT);
  let sexData = sexQuery.data;
  if (sexData) {
    sexData = sexData.getSexStat;
  }

  let ethnicityQuery = useQuery(ETHNICITY_STAT);
  let ethnicityData = ethnicityQuery.data;
  if (ethnicityData) {
    ethnicityData = ethnicityData.getEthnicityStat;
  }

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
              <Media greaterThanOrEqual="computer">
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
                    name="Gender"
                    active={activeItem === "Gender"}
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
                {activeItem === "Gender" && (
                  <Segment attached="bottom">
                    <StatisticDisplay statData={sexData} />
                  </Segment>
                )}
                {activeItem === "Ethnicity" && (
                  <Segment attached="bottom">
                    <StatisticDisplay statData={ethnicityData} />
                  </Segment>
                )}
              </Media>

              <Media lessThan="computer">
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
                    name="Gender"
                    active={activeItem === "Gender"}
                    onClick={handleItemClick}
                  >
                    <Icon name="dropdown" />
                    Gender
                  </Accordion.Title>
                  <Accordion.Content active={activeItem === "Gender"}>
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
              </Media>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Statistics;
