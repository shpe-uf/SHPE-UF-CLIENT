import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  Button,
  Modal,
  Card,
  Tab,
  Segment,
  Loader,
} from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
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
      recruitmentDay: false,
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

  let corpsQuery = useQuery(FETCH_CORPORATIONS_QUERY, {});
  let data = corpsQuery.data;
  let loading = corpsQuery.loading;

  let corporations = [];
  if (data && data.getCorporations) {
    corporations = data.getCorporations;
  }

  if (corporations) {
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
        if (filter.recruitmentDay) if (corp.recruitmentDay) return true;
        return false;
      });
  }

  var {
    user: { id, username },
  } = useContext(AuthContext);

  let userQuery = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id,
    },
  });
  let userData = userQuery.data;
  let user = null;

  if (userData && userData.getUser) {
    user = userData.getUser;
  }

  const [bookmark] = useMutation(BOOKMARK_MUTATION);
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK_MUTATION);

  const addBookmark = (corpName, username) => {
    bookmark({
      variables: {
        company: corpName,
        username: username,
      },
      update(cache, { data: { bookmark } }) {
        try {
          const { getUser } = cache.readQuery({
            query: FETCH_USER_QUERY,
            variables: { userId: id },
          }) || { getUser: { bookmarks: [] } }; // Fallback to empty bookmarks array if data is null
  
          cache.writeQuery({
            query: FETCH_USER_QUERY,
            variables: { userId: id },
            data: {
              getUser: {
                ...getUser,
                bookmarks: [...getUser.bookmarks, corpName],
              },
            },
          });
        } catch (error) {
          console.error("Error updating cache:", error);
        }
      },
    });
  };
  
  const removeBookmark = (corpName, username) => {
    deleteBookmark({
      variables: {
        company: corpName,
        username: username,
      },
      update(cache, { data: { deleteBookmark } }) {
        try {
          const { getUser } = cache.readQuery({
            query: FETCH_USER_QUERY,
            variables: { userId: id },
          }) || { getUser: { bookmarks: [] } }; // Fallback to empty bookmarks array if data is null
  
          cache.writeQuery({
            query: FETCH_USER_QUERY,
            variables: { userId: id },
            data: {
              getUser: {
                ...getUser,
                bookmarks: getUser.bookmarks.filter((bookmark) => bookmark !== corpName),
              },
            },
          });
        } catch (error) {
          console.error("Error updating cache:", error);
        }
      },
    });
  };
  

  var corporationPane = {
    menuItem: { content: "Corporations", icon: "building outline" },
    render: () => (
      <Tab.Pane loading={!corporations}>
        <Grid stackable>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="sponsor-padding">
              <Card.Group centered stackable itemsPerRow={4}>
                {loading | !data ? (
                  <div style={{ marginTop: "300px" }}>
                    <Loader active>
                      Fetching corporations, please wait...
                    </Loader>
                  </div>
                ) : (
                  corporations &&
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
                  ))
                )}
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
                    {loading | !data ? (
                      <div style={{ marginTop: "300px" }}>
                        <Loader active>
                          Fetching corporations, please wait...
                        </Loader>
                      </div>
                    ) : (
                      user.bookmarks &&
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
                        ))
                    )}
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
    this.recruitmentDay = filter.recruitmentDay
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
