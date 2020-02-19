import gql from "graphql-tag";

export const FETCH_USERS_QUERY = gql`
  {
    getUsers {
      firstName
      lastName
      photo
      major
      year
      graduating
      country
      ethnicity
      sex
      username
      email
      createdAt
      points
      fallPoints
      springPoints
      summerPoints
      permission
      listServ
      events {
        name
        category
        createdAt
        points
      }
    }
  }
`;

export const FETCH_EVENTS_QUERY = gql`
  {
    getEvents {
      id
      name
      code
      category
      points
      request
      attendance
      expiration
      semester
      createdAt
      users {
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const FETCH_ALUMNIS_QUERY = gql`
  {
    getAlumnis {
      firstName
      lastName
      email
      employer
      position
      undergrad {
        university
        year
        major
      }
      grad {
        university
        year
        major
      }
      location {
        city
        state
        country
      }
      coordinates {
        latitude
        longitude
      }
      linkedin
    }
  }
`;

export const FETCH_CORPORATIONS_QUERY = gql `
  {
    getCorporations {
      name
      logo
    	slogan
      majors
      industries
      overview
      mission
      goals
      businessModel
      newsLink
      applyLink
      academia
      govContractor
      nonProfit
      visaSponsor
      shpeSponsor
      industryPartnership
      fallBBQ
      springBBQ
      nationalConvention
    }
  }
`;

export const FETCH_REQUESTS_QUERY = gql`
  {
    getRequests {
      name
      type
      points
      firstName
      lastName
      username
      createdAt
    }
  }
`;

export const MAJOR_STAT = gql`
  {
    getMajorStat {
      _id
      value
    }
  }
`;

export const COUNTRY_STAT = gql`
  {
    getCountryStat {
      _id
      value
    }
  }
`;

export const FETCH_TASKS_QUERY = gql`
  {
    getTasks {
      id
      name
      startDate
      endDate
      description
      points
      attendance
      semester
      createdAt
      users {
        firstName
        lastName
        username
        email
      }
    }
  }
`;

export const YEAR_STAT = gql `
  {
    getYearStat {
      _id
      value
    }
  }
`;

export const SEX_STAT = gql`
  {
    getSexStat {
      _id
      value
    }
  }
`;

export const ETHNICITY_STAT = gql`
  {
    getEthnicityStat {
      _id
      value
    }
  }
`;
