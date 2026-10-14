import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { useQuery } from "@apollo/client";

import Title from "../components/Title";
import AlumniMap from "../components/AlumniMap";
import AlumniTable from "../components/AlumniTable";

import { FETCH_ALUMNIS_QUERY } from "../util/graphql";

function AlumniDirectory() {
  let alumnis = null;
  let { data } = useQuery(FETCH_ALUMNIS_QUERY);
  if (data) {
    alumnis = data.getAlumnis;
  }

  return (
    <div className="body">
      <Title title="Alumni Directory" />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <AlumniMap alumnis={alumnis} />
              <p style={{ fontSize: "0.85em", marginTop: "0.5em" }}>
                Locations powered by <a href="https://www.geoapify.com/">Geoapify</a>
                {" · "}
                <a href="https://www.openstreetmap.org/copyright">
                  © OpenStreetMap contributors
                </a>
              </p>
              <AlumniTable alumnis={alumnis} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default AlumniDirectory;
