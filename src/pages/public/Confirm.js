import React, { useCallback, useState, useEffect } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { Segment, Dimmer, Loader, Container, Grid } from "semantic-ui-react";
import { Media } from "../../Media";
import { useParams } from 'react-router-dom';

function Confirm(){
  const [confirming, setConfirming] = useState(false);
  
  const value = useParams();

  const [confirmMutation] = useMutation(CONFIRM_USER);

  const confirm = useCallback(() => {
    confirmMutation({
      variables: value,
      onCompleted: () => {
        setConfirming(false);
      }
    })
  }, [confirmMutation, value]);

  useEffect(() => {
    confirm();
  }, [confirm]);

  return(

    <div className="login">
      <div className="overlay-confirm">
        <Dimmer active={confirming} inverted>
          <Loader size='massive' disabled={!confirming}>Loading</Loader>
        </Dimmer>
        {!confirming && (
          <>
            <Media greaterThan="computer">
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
            </Media>
            <Media at="tablet">
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={12}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                              <div>
                                <h3 className="text-white confirmMsg">
                                  Thank you for confirming your account!
                                </h3>
                              </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Media>
            <Media lessThan="tablet">
              <Container>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={16}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                              <div>
                                <h3 className="text-white confirmMsg">
                                  Thank you for confirming your account!
                                </h3>
                              </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Media>
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
