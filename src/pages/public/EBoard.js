import React from "react";
import { Container, Card } from "semantic-ui-react";
import { Media } from "../../Media";
import { useQuery } from "@apollo/client";
import EBoardCards from "../../components/EBoardCards";
import { FETCH_EBOARD_QUERY } from "../../util/graphql";

function EBoard() {
  const { data, loading } = useQuery(FETCH_EBOARD_QUERY);
  const members = React.useMemo(
    () =>
      data?.getEboard?.filter((member) => member && member.active !== false) || [],
    [data]
  );

  return (
    <div className="body">
      <div className="masthead masthead-eboard">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Executive Board</h1>
          </Container>
        </div>
      </div>

      <Container>
        <Media greaterThanOrEqual="computer">
          <Card.Group itemsPerRow={3} centered className={loading ? "loading" : ""}>
            <EBoardCards members={members} />
          </Card.Group>
        </Media>
        <Media lessThan="computer">
          <Card.Group itemsPerRow={1} className={loading ? "loading" : ""}>
            <EBoardCards members={members} />
          </Card.Group>
        </Media>
      </Container>
    </div>
  );
}

export default EBoard;
