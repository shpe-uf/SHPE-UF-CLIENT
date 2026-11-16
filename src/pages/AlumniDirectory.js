import React, { useState } from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";

import Title from "../components/Title";
import AlumniMap from "../components/AlumniMap";
import AlumniTable from "../components/AlumniTable";
import AlumniFilterSelection from "../components/AlumniFilterSelection";

import { FETCH_ALUMNIS_QUERY } from "../util/graphql";

function AlumniDirectory() {
  let alumnisQuery = useQuery(FETCH_ALUMNIS_QUERY, {});
  let data = alumnisQuery.data;
  let loading = alumnisQuery.loading;
  let alumnis = [];

  if (data && data.getAlumnis) {
    alumnis = data.getAlumnis;
  }

  const [filter, setFilter] = useState(
    new Filter({
      name: [],
      major: [],
      employer: [],
      position: [],
      location: [],
    })
  );

  if (!loading && data) {
    alumnis = data.getAlumnis.filter(function (alumni) {
      let fullName = alumni.firstName.concat(" ").concat(alumni.lastName);
      let locationString = ""
        .concat(alumni.location.city)
        .concat(" ")
        .concat(alumni.location.state)
        .concat(" ")
        .concat(alumni.location.country);
      let allMajors = ""
        .concat(alumni.undergrad.major)
        .concat(" ")
        .concat(alumni.grad.major);
      return (
        (filter.name.length === 0
          ? true
          : filter.name
              .map((n) =>
                alumni.firstName.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true) ||
            filter.name
              .map((n) =>
                alumni.lastName.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true) ||
            filter.name
              .map((n) =>
                fullName.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true)) &&
        (filter.major.length === 0
          ? true
          : filter.major
              .map((n) =>
                allMajors.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true)) &&
        (filter.employer.length === 0
          ? true
          : filter.employer
              .map((n) =>
                alumni.employer.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true)) &&
        (filter.position.length === 0
          ? true
          : filter.position
              .map((n) =>
                alumni.position.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true)) &&
        (filter.location.length === 0
          ? true
          : filter.location
              .map((n) =>
                locationString.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true))
      );
    });
  }

  function getAlumnis(newFilter) {
    setFilter(new Filter(newFilter));
  }

  return (
    <div className="body">
      <Title title="Alumni Directory" />
      <Container className="body">
        <AlumniFilterSelection getAlumnis={getAlumnis} />
        <Grid>
          <Grid.Row>
            <Grid.Column>
              {loading | !data ? (
                <div style={{ marginTop: "300px" }}>
                  <Loader active>Loading alumni, please wait...</Loader>
                </div>
              ) : (
                <>
                  <AlumniMap alumnis={alumnis} />
                  <p style={{ fontSize: "0.85em", marginTop: "0.5em" }}>
                    Locations powered by <a href="https://www.geoapify.com/">Geoapify</a>
                    {" · "}
                    <a href="https://www.openstreetmap.org/copyright">
                      © OpenStreetMap contributors
                    </a>
                  </p>
                  <AlumniTable alumnis={alumnis} />
                </>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

class Filter {
  constructor(filter) {
    this.name = filter.name;
    this.major = filter.major;
    this.employer = filter.employer;
    this.position = filter.position;
    this.location = filter.location;
  }
}

export default AlumniDirectory;
