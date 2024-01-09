import React from "react";
import {
  Container,
  Grid
} from "semantic-ui-react";
import { Media } from "../Media";
import Title from "../components/Title";
import AdminPanel from "../components/AdminPanel";

function Admin({permission}) {
  return (
    <div className="body">
      <Title title="Admin Panel" />
      <Container>
        <Media greaterThan="computer">
          <Grid columns={3}>
            <AdminPanel permission={permission}/>
          </Grid>
        </Media>
        <Media at="tablet">
          <Grid columns={2}>
            <AdminPanel permission={permission}/>
          </Grid>
        </Media>
        <Media at="mobile">
          <Grid columns={1}>
            <AdminPanel permission={permission}/>
          </Grid>
        </Media>
      </Container>
    </div>
  );
}

export default Admin;
