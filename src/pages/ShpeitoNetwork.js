import React, { useState } from "react";
import {
  Segment,
  Container
} from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_USERS_QUERY } from "../util/graphql";

import Title from "../components/Title";
import FilterSelection from "../components/FilterSelection";

function ShpeitoNetwork() {

  const [filter, setFilter] = useState(new Filter({
    name: [],
    major: [],
    year: [],
    graduating: [],
    country: [],
    classes: []
  }));

  let {data, loading} = useQuery(FETCH_USERS_QUERY);
  let users = [];
  
  if(!loading) {
    users = data.getUsers.filter(function (user) {
      return ( 

        (filter.major.length      === 0 ? true :      filter.major.includes(user.major))      &&
        (filter.year.length       === 0 ? true :       filter.year.includes(user.year))       &&
        (filter.graduating.length === 0 ? true : filter.graduating.includes(user.graduating)) &&
        (filter.country.length    === 0 ? true :    filter.country.includes(user.country))    &&
        (filter.classes.length    === 0 ? true :    filter.classes.includes(user.classes))    &&
        (filter.name.length       === 0 ? true : filter.name.map(n => n.toLowerCase().includes(user.firstName.toLowerCase())).includes(true) ||
                                                 filter.name.map(n => n.toLowerCase().includes(user.lastName.toLowerCase() )).includes(true))
      )
    })
  }

  function getUsers(newFilter) {
    console.log('assigning this new filter: ', newFilter)
    setFilter(new Filter(newFilter));
  }

  return (
    <div className="body">
      <Title title="SHPEito Network"/>
      <Container>
        <FilterSelection getUsers={getUsers}/>
        {loading ? <Segment disabled loading><div style={{height:'400px'}} /></Segment> :

          users ? users.map(shpeito => <div key={shpeito.username}>{shpeito.firstName}</div>) : <div>error</div>
        }
      </Container>
    </div>
  );
}

class Filter {
  constructor(filter) {
    this.name = filter.name;
    this.major = filter.major;
    this.year = filter.year;
    this.graduating = filter.graduating;
    this.country = filter.country;
    this.classes = filter.classes;
  }
}

export default ShpeitoNetwork;
