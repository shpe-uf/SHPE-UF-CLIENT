import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  Button,
  Modal,
  Card,
  Tab,
  Segment,
} from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import CorporationProfile from "../components/CorporationProfile";
import Title from "../components/Title";
import CorporateCard from "../components/CorporateCard";

import { AuthContext } from "../context/auth";

import gql from "graphql-tag";
import { FETCH_CORPORATIONS_QUERY } from "../util/graphql";
import CorporationFilter from "../components/CorporationFilter";

function Corporations(props) {
  const [viewCorporationModal, setViewCorporationModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  //State to keep track of the current corporation selected
  const [corporationInfo, setCorporationInfo] = useState({});
  const [filter, setFilter] = useState(
    new Filter({
      academia: false,
      govContractor: false,
      nonProfit: false,
      visaSponsor: false,
      shpeSponsor: false,
      industryPartnership: false,
      fallBBQ: false,
      springBBQ: false,
      nationalConvention: false,
    })
  );

  //Corporation information modals
  const openModal = (name) => {
    if (name === "viewCorporation") {
      setViewCorporationModal(true);
    }
  };

  const closeModal = (name) => {
    if (name === "viewCorporation") {
      setCorporationInfo({});
      setViewCorporationModal(false);
    }
  };

  //Setter function to update the state with the selected corporation
  function getCorporationInfo(corporationInfo) {
    setCorporationInfo(corporationInfo);
  }

  let {
    user: { id, username },
  } = useContext(AuthContext);

  let { data } = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id,
    },
  });
  let user = null;
  if (data) {
    user = data.getUser;
  }

  let corporations = null;
  let { corpData, loading } = useQuery(FETCH_CORPORATIONS_QUERY);
  if (corpData) {
    corporations = corpData.getCorporations;
  }

  if (corporations) {
    console.log(filter);
    if (Object.values(filter).includes(true))
      corporations = corporations.filter((corp) => {
        if (filter.academia) if (corp.academia) return true;
        if (filter.govContractor) if (corp.govContractor) return true;
        if (filter.nonProfit) if (corp.nonProfit) return true;
        if (filter.visaSponsor) if (corp.visaSponsor) return true;
        if (filter.shpeSponsor) if (corp.shpeSponsor) return true;
        if (filter.industryPartnership)
          if (corp.industryPartnership) return true;
        if (filter.fallBBQ) if (corp.fallBBQ) return true;
        if (filter.springBBQ) if (corp.springBBQ) return true;
        if (filter.nationalConvention) if (corp.nationalConvention) return true;
        return false;
      });
  }

  const [bookmark] = useMutation(BOOKMARK_MUTATION);
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK_MUTATION);

  const removeBookmark = (corpName, username) => {
    deleteBookmark({
      variables: {
        company: corpName,
        username: username,
      },
    });
    user.bookmarks.splice(user.bookmarks.indexOf(corpName), 1);
  };

  const addBookmark = (corpName, username) => {
    bookmark({
      variables: {
        company: corpName,
        username: username,
      },
    });
    user.bookmarks.push(corpName);
  };

  var corporationPane = {
    menuItem: { content: "Corporations", icon: "building outline" },
    render: () => (
      <Tab.Pane loading={!corporations}>
        <Grid stackable>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="sponsor-padding">
              <Card.Group centered stackable itemsPerRow={4}>
                {corporations &&
                  corporations.map((corporation, index) => (
                    <CorporateCard key={index} corporation={corporation}>
                      <Button
                        fluid
                        className="corp-button"
                        content="View Profile"
                        icon="eye"
                        labelPosition="left"
                        onClick={() => {
                          getCorporationInfo(corporation);
                          openModal("viewCorporation");
                        }}
                      />

                      {user &&
                      user.bookmarks.find(function (bookmarked) {
                        return bookmarked === corporation.name;
                      }) ? (
                        <Button
                          className="corp-button"
                          fluid
                          onClick={() =>
                            removeBookmark(corporation.name, username)
                          }
                          floated="right"
                          icon="book"
                          color="red"
                          content="Remove Bookmark"
                          labelPosition="left"
                        />
                      ) : (
                        <Button
                          className="corp-button"
                          fluid
                          onClick={() =>
                            addBookmark(corporation.name, username)
                          }
                          floated="right"
                          icon="book"
                          content="Add Bookmark"
                          labelPosition="left"
                        />
                      )}
                    </CorporateCard>
                  ))}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  };

  var bookmarksPane = {
    menuItem: { content: "Bookmarks", icon: "sticky note outline" },
    render: () => {
      if (user && corporations) {
        return (
          <Tab.Pane loading={!user.bookmarks}>
            <Grid stackable>
              <Grid.Row className="sponsor-padding">
                <Grid.Column className="sponsor-padding">
                  <Card.Group centered stackable itemsPerRow={4}>
                    {user.bookmarks &&
                      corporations
                        .filter(function (corporation) {
                          return user.bookmarks.includes(corporation.name);
                        })
                        .map((corporation, index) => (
                          <CorporateCard key={index} corporation={corporation}>
                            <Button
                              fluid
                              className="corp-button"
                              content="View Profile"
                              icon="eye"
                              labelPosition="left"
                              onClick={() => {
                                getCorporationInfo(corporation);
                                openModal("viewCorporation");
                              }}
                            />
                            {user &&
                            user.bookmarks.find(function (bookmarked) {
                              return bookmarked === corporation.name;
                            }) ? (
                              <Button
                                className="corp-button"
                                fluid
                                onClick={() =>
                                  removeBookmark(corporation.name, username)
                                }
                                floated="right"
                                icon="book"
                                color="red"
                                content="Remove Bookmark"
                                labelPosition="left"
                              />
                            ) : (
                              <Button
                                className="corp-button"
                                fluid
                                onClick={() =>
                                  addBookmark(corporation.name, username)
                                }
                                floated="right"
                                icon="book"
                                content="Add Bookmark"
                                labelPosition="left"
                              />
                            )}
                          </CorporateCard>
                        ))}
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Tab.Pane>
        );
      }
    },
  };

  return (
    <div className="body">
      <Title title="Corporate Database" />
      <Segment basic>
        <Container textAlign="right">
          <Button size="tiny" basic onClick={() => setFilterModal(true)}>
            Filter
          </Button>
          <Tab panes={[corporationPane, bookmarksPane]} />
        </Container>
      </Segment>

      <Modal
        open={viewCorporationModal}
        size="large"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Company Profile</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <CorporationProfile corporation={corporationInfo} />
                <Button
                  color="red"
                  floated="left"
                  content="Close"
                  onClick={() => closeModal("viewCorporation")}
                />
                {user &&
                user.bookmarks.find(function (bookmarked) {
                  return bookmarked === corporationInfo.name;
                }) ? (
                  <Button
                    onClick={() => {
                      deleteBookmark({
                        variables: {
                          company: corporationInfo.name,
                          username: username,
                        },
                      });
                      user.bookmarks.splice(
                        user.bookmarks.indexOf(corporationInfo.name),
                        1
                      );
                    }}
                    floated="right"
                    color="red"
                    content="Remove Bookmark"
                  />
                ) : (
                  <Button
                    onClick={() => {
                      bookmark({
                        variables: {
                          company: corporationInfo.name,
                          username: username,
                        },
                      });
                      user.bookmarks.push(corporationInfo.name);
                    }}
                    floated="right"
                    content="Add Bookmark"
                  />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
      <CorporationFilter
        open={filterModal}
        close={() => setFilterModal(false)}
        getCorporations={(newFilter) => setFilter(new Filter(newFilter))}
        filter={filter}
      />
    </div>
  );
}

class Filter {
  constructor(filter) {
    this.academia = filter.academia;
    this.govContractor = filter.govContractor;
    this.nonProfit = filter.nonProfit;
    this.visaSponsor = filter.visaSponsor;
    this.shpeSponsor = filter.shpeSponsor;
    this.industryPartnership = filter.industryPartnership;
    this.fallBBQ = filter.fallBBQ;
    this.springBBQ = filter.springBBQ;
    this.nationalConvention = filter.nationalConvention;
  }
}

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      username
      bookmarks
    }
  }
`;

const BOOKMARK_MUTATION = gql`
  mutation bookmark($company: String!, $username: String!) {
    bookmark(company: $company, username: $username) {
      bookmarks
    }
  }
`;

const DELETE_BOOKMARK_MUTATION = gql`
  mutation deleteBookmark($company: String!, $username: String!) {
    deleteBookmark(company: $company, username: $username) {
      bookmarks
    }
  }
`;

export default Corporations;
