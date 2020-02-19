import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Segment, Dimmer, Loader, Container, Grid, Responsive } from "semantic-ui-react";

function Confirm(props){
  const [confirming, setConfirming] = useState(true);

  const value  = {
    id: props.match.params.id
  };

  const [confirm] = useMutation(CONFIRM_USER, {
    onCompleted(){
      setConfirming(false);
    },
    variables: value
  });

  useEffect(() => {
    confirm();
  });

  return(

    <div className="login">
      <div className="overlay-confirm">
        <Dimmer active={confirming} inverted>
          <Loader size='massive' disabled={!confirming}>Loading</Loader>
        </Dimmer>
        {!confirming && (
          <>
            <Responsive {...Responsive.onlyComputer}>
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={8}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                              <div>
                                <h1 className="text-white confirmMsg">
                                  Thank you for confirming your account!
                                </h1>
                              </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Responsive>
            <Responsive {...Responsive.onlyTablet}>
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={12}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                              <div>
                                <h1 className="text-white confirmMsg">
                                  Thank you for confirming your account!
                                </h1>
                              </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Responsive>
            <Responsive {...Responsive.onlyMobile}>
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={16}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                              <div>
                                <h1 className="text-white confirmMsg">
                                  Thank you for confirming your account!
                                </h1>
                              </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Responsive>
          </>
        )}
      </div>
    </div>
  );

}

const CONFIRM_USER = gql`
  mutation confirmUser($id: String!) {
    confirmUser(id: $id) {
      id
      email
      username
      createdAt
    }
  }
`

export default Confirm
