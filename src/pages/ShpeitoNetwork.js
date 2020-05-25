import React, { useState } from "react";
import {
  Segment,
  Container
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

import Title from "../components/Title";
import DropdownMenu from "../components/DropdownMenu";

function ShpeitoNetwork() {

  const [filter, setFilter] = useState({
    name: [],
    major: [],
    year: [],
    graduating: [],
    country: [],
    classes: []
  });

  const [ getShpeitos, { loading, error, data } ] = useLazyQuery(SHPEITO_QUERY,  {
    variables: { 
      name: filter.name,
      major: filter.major,
      year: filter.year,
      graduating: filter.graduating,
      country: filter.country,
      classes: filter.classes
    },
  });

  function getUsers(newFilter) {
    setFilter(newFilter);
  }

  return (
    <div className="body">
      <Title title="SHPEito Network"/>
      <Container>
        <DropdownMenu getUsers={getUsers}/>
        {true ? <Segment disabled loading><div style={{height:'400px'}} /></Segment> :

          <div/>
        }
      </Container>
    </div>
  );
}

const SHPEITO_QUERY = gql`
  query shpeitoQuery(
    $name: [String]!,
    $major: [String]!,
    $year: [String]!,
    $graduating: [String]!,
    $country: [String]!,
    $classes: [String]!
  ) {
    shpeitoQuery(
      name: $name,
      major: $major,
      year: $year,
      graduating: $graduating,
      country: $country,
      classes: $classes
    )
  }
`;

export default ShpeitoNetwork;
