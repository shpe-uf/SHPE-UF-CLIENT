import React from "react";
import { Grid,  Segment } from "semantic-ui-react";
import { Media } from "../Media"

function PointsBar({ user }) {
  const FallTop = user ? 100 - user.fallPercentile : 0;
  const SpringTop = user ? 100 - user.springPercentile : 0;
  const SummerTop = user ? 100 - user.summerPercentile : 0;
  return (
    <>
      <Media greaterThanOrEqual="tablet">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <div className="fall">
                <Segment vertical>
                  <p className="points-header">Fall Points</p>
                </Segment>
                <Segment vertical>
                  <p className="points-number">
                    {user ? user.fallPoints : "0"}
                  </p>
                </Segment>
                <Segment vertical>
                  <p className="points-header">
                    Top {FallTop} percent
                  </p>
                </Segment>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="spring">
                <Segment vertical>
                  <p className="points-header">Spring Points</p>
                </Segment>
                <Segment vertical>
                  <p className="points-number">
                    {user ? user.springPoints : "0"}
                  </p>
                </Segment>
                <Segment vertical>
                  <p className="points-header">
                    Top {SpringTop} percent
                  </p>
                </Segment>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="summer">
                <Segment vertical>
                  <p className="points-header">Summer Points</p>
                </Segment>
                <Segment vertical>
                  <p className="points-number">
                    {user ? user.summerPoints : "0"}
                  </p>
                </Segment>
                <Segment vertical>
                  <p className="points-header">
                    Top {SummerTop} percent
                  </p>
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
      <Media lessThan="tablet">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div className="fall">
                <Segment vertical>
                  <p className="points-header">Fall Points</p>
                </Segment>
                <Segment vertical>
                  <p className="points-number">
                    {user ? user.fallPoints : "0"}
                  </p>
                </Segment>
                <Segment vertical>
                  <p className="points-header">
                    Top {FallTop} Percent
                  </p>
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className="spring">
                <Segment vertical>
                  <p className="points-header">Spring Points</p>
                </Segment>
                <Segment vertical>
                  <p className="points-number">
                    {user ? user.springPoints : "0"}
                  </p>
                </Segment>
                <Segment vertical>
                  <p className="points-header">
                    Top {SpringTop} Percent
                  </p>
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className="summer">
                <Segment vertical>
                  <p className="points-header">Summer Points</p>
                </Segment>
                <Segment vertical>
                  <p className="points-number">
                    {user ? user.summerPoints : "0"} 
                  </p>
                </Segment>
                <Segment vertical>
                  <p className="points-header">
                    Top {SummerTop} Percent
                  </p>
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Media>
    </>
  );
}

export default PointsBar;
