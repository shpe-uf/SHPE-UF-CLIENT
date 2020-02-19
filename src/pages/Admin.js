import React from "react";
import {
  Container,
  Grid,
  Responsive
} from "semantic-ui-react";

import Title from "../components/Title";
import AdminPanel from "../components/AdminPanel";

function Admin() {
  return (
    <div className="body">
      <Title title="Admin Panel" />
      <Container>
        <Responsive {...Responsive.onlyComputer}>
          <Grid columns={3}>
            <AdminPanel />
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Grid columns={2}>
            <AdminPanel />
          </Grid>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Grid columns={1}>
            <AdminPanel />
          </Grid>
        </Responsive>
      </Container>
    </div>
  );
}

export default Admin;
