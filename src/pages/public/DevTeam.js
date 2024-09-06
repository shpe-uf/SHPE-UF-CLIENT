import React from "react";
import { Container, Card } from "semantic-ui-react";
import { Media } from "../../Media";
import DevTeamCards from "../../components/DevTeam/WebsiteTeamCards";
import DevTeamTabs from "../../components/DevTeam/DevTeamTabs";

function DevTeam() {
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
          <DevTeamTabs />
        </div>
      </Container>

    </div>
  );
}

export default DevTeam;
