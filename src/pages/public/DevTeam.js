import React from "react";
// import { Container, Card } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
// import { Media } from "../../Media";
// import DevTeamCards from "../../components/DevTeam/WebsiteTeamCards";
import { useQuery } from "@apollo/client";
import DevTeamTabs from "../../components/DevTeam/DevTeamTabs";
import { FETCH_DEVTEAM_QUERY } from "../../util/graphql";

function DevTeam() {
  const { data, loading } = useQuery(FETCH_DEVTEAM_QUERY);
  const members = React.useMemo(
    () =>
      data?.getDevTeam?.filter((member) => member && member.active !== false) || [],
    [data]
  );
  return (
    <div className="body">
      <div className="masthead masthead-team">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Development Team</h1>
          </Container>
        </div>
      </div>

      <Container>
        <div>
          <DevTeamTabs members={members} loading={loading} />
        </div>
      </Container>

      {/**
      <Container>
        <Media greaterThanOrEqual="computer">
          <Card.Group itemsPerRow={3} centered>
            <DevTeamCards/>
          </Card.Group>
        </Media>
        <Media lessThan="computer">
          <Card.Group itemsPerRow={1}>
            <DevTeamCards/>
          </Card.Group>
        </Media>
      </Container>
      */}

    </div>
  );
}

export default DevTeam;
