import React, {useState, useContext} from "react";
import { Container, Grid, Card, Button, Modal, Tab, Segment } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import CorporationProfile from "../components/CorporationProfile";
import Title from "../components/Title";

import { AuthContext } from "../context/auth";

import gql from "graphql-tag";
import {FETCH_CORPORATIONS_QUERY} from "../util/graphql";

function Corporations(props) {
  const [viewCorporationModal, setViewCorporationModal] = useState(false);
  
  //State to keep track of the current corporation selected
  const [corporationInfo, setCorporationInfo] = useState({});

  //Corporation information modals
  const openModal = name => {
    if (name === "viewCorporation") {
      setViewCorporationModal(true);
    }
  };

  const closeModal = name => {
    if (name === "viewCorporation") {
      setCorporationInfo({});
      setViewCorporationModal(false);
    }
  }

  //Setter function to update the state with the selected corporation
  function getCorporationInfo(corporationInfo) {
    setCorporationInfo(corporationInfo);
  }

  var { user: { id, username } } = useContext(AuthContext);

  var user = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id
    }
  }).data.getUser;

  var corporations = useQuery(FETCH_CORPORATIONS_QUERY).data.getCorporations;

  const [bookmark] = useMutation(BOOKMARK_MUTATION);
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK_MUTATION);

  var corporationPane = {
    menuItem: {content:'Corporations', icon:'building outline'},
    render: () => 
      <Tab.Pane loading={!corporations}>
        <Grid stackable columns={4}>
          <Grid.Row className="sponsor-padding">
            {
            corporations &&
            corporations.map((corporation, index) => (
              <Grid.Column className="card-team" key={index}>
                <Card
                  fluid
                  raised
                  image={<img className='corp-logo' src={corporation.logo} alt={'Logo for ' + corporation.name}/>}
                  header={corporation.name}
                  extra={
                          <>
                          <Button
                          fluid
                          className="corp-button"
                          content="View Profile"
                          icon="eye"
                          labelPosition="left"
                          onClick={()=>{
                              getCorporationInfo(corporation);
                              openModal("viewCorporation");
                            }}
                          />
                            {user && user.bookmarks.find(function(bookmarked){
                              return bookmarked === corporation.name;
                            }) ? (
                            <Button className="corp-button" fluid onClick={() => {deleteBookmark({variables: {
                                company: corporation.name,
                                username: username
                              }});
                              user.bookmarks.splice(user.bookmarks.indexOf(corporation.name), 1); 
                              }}
                              floated='right' icon='book' color='red' content="Remove Bookmark" labelPosition="left"/>
                            ) : (
                            <Button className="corp-button" fluid onClick={() => {bookmark({variables: {
                                company: corporation.name,
                                username: username
                              }});
                              user.bookmarks.push(corporation.name);
                              }} 
                              floated='right' icon='book' content="Add Bookmark" labelPosition="left"/>
                            )
                          }
                          </>
                        }
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Tab.Pane>
  }

  var bookmarksPane = {
    menuItem: {content:'Bookmarks', icon:'sticky note outline'},
    render: () => <Tab.Pane loading={!user.bookmarks}>
        <Grid stackable columns={4}>
          <Grid.Row className="sponsor-padding">
            {
            user.bookmarks &&
            corporations.filter(function (corporation) {
              return user.bookmarks.includes(corporation.name);
            }).map((corporation, index) => (
              <Grid.Column className="card-team" key={index}>
                <Card
                  fluid
                  raised
                  image={<img className='corp-logo' src={corporation.logo}/>}
                  header={corporation.name}
                  extra={
                          <>
                          <Button
                          fluid
                          className="corp-button"
                          content="View Profile"
                          icon="eye"
                          labelPosition="left"
                          onClick={()=>{
                              getCorporationInfo(corporation);
                              openModal("viewCorporation");
                            }}
                          />
                            {user && user.bookmarks.find(function(bookmarked){
                              return bookmarked === corporation.name;
                            }) ? (
                            <Button className="corp-button" fluid onClick={() => {deleteBookmark({variables: {
                                company: corporation.name,
                                username: username
                              }});
                              user.bookmarks.splice(user.bookmarks.indexOf(corporation.name), 1); 
                              }}
                              floated='right' icon='book' color='red' content="Remove Bookmark" labelPosition="left"/>
                            ) : (
                            <Button className="corp-button" fluid onClick={() => {bookmark({variables: {
                                company: corporation.name,
                                username: username
                              }});
                              user.bookmarks.push(corporation.name);
                              }} 
                              floated='right' icon='book' content="Add Bookmark" labelPosition="left"/>
                            )
                          }
                          </>
                        }
                />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
    </Tab.Pane>
  }

  return (
    <div className="body">
      <Title title="Corporate Database" />
      <Segment basic>
        <Container>
        <Tab 
          panes={[corporationPane, bookmarksPane]}
        />
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
            <CorporationProfile corporation={corporationInfo}/>
              <Button 
                color="red"
                floated="left"
                content="Close"
                onClick={()=> closeModal("viewCorporation")}
              />
              {user && user.bookmarks.find(function(bookmarked){
                return bookmarked === corporationInfo.name;
              }) ? (
              <Button onClick={() => {deleteBookmark({variables: {
                  company: corporationInfo.name,
                  username: username
                }});
                user.bookmarks.splice(user.bookmarks.indexOf(corporationInfo.name), 1); 
                }}
                floated='right' color='red' content="Remove Bookmark"/>
              ) : (
              <Button onClick={() => {bookmark({variables: {
                  company: corporationInfo.name,
                  username: username
                }});
                user.bookmarks.push(corporationInfo.name);
                }} 
                floated='right' content="Add Bookmark"/>
              )
            }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
    </div>
  );
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
  mutation bookmark(
    $company: String!,
    $username: String!
  ) {
    bookmark(
      company: $company
      username: $username
    ) {
      bookmarks
    }
  }
`;

const DELETE_BOOKMARK_MUTATION = gql`
  mutation deleteBookmark(
    $company: String!,
    $username: String!
  ) {
    deleteBookmark(
      company: $company
      username: $username
    ) {
      bookmarks
    }
  }
`;

export default Corporations;