import React, {useState} from "react";
import gql from "graphql-tag";
import { useQuery} from "@apollo/react-hooks";
import { Grid, Image, Button, List, Divider, Container, Responsive, Icon, Label, LabelGroup } from "semantic-ui-react";
import PointsBar from "./PointsBar";

function MentorPairTab({mentorID, menteeID, user}) {
    const [mentor, setMentor] = useState({});
    const [mentee, setMentee] = useState({});

    var {data, refetch} = useQuery(FETCH_USER_QUERY, {
        variables: {
          userId: mentorID
        }
    });

    var {data: data2, refetch: refetch2} = useQuery(FETCH_USER_QUERY, {
        variables: {
          userId: menteeID
        }
    });

    if(typeof data !== 'undefined' && Object.keys(data).length !== 0 && Object.keys(mentor).length === 0){
        setMentor(data.getUser);
    }

    if(typeof data2 !== 'undefined' && Object.keys(data2).length !== 0 && Object.keys(mentee).length === 0){
        setMentee(data2.getUser);
    }

    return (
        <Grid stackable>
            {user && user.message && user.message !== undefined && (
            <Grid.Row>
                <Grid.Column width={16}>
                <div className="ui warning message">
                    <p>{user.message}</p>
                </div>
                </Grid.Column>
            </Grid.Row>
            )}
            {(Object.keys(mentor).length !== 0) && (
            <>
                <Grid.Row>
                    <h4>Paired Mentor</h4>
                </Grid.Row>
                <Grid.Row>
                    <h5>{mentor.firstName} {mentor.lastName}</h5>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <PointsBar user={mentor} />
                    </Grid.Column>
                </Grid.Row>
            </>
            )}
            {(Object.keys(mentee).length !== 0) && (
            <>
                <Grid.Row>
                    <h4>Paired Mentee</h4>
                </Grid.Row>
                <Grid.Row>
                    <h5>{mentee.firstName} {mentee.lastName}</h5>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <PointsBar user={mentee} />
                    </Grid.Column>
                </Grid.Row>
            </>
            )}
        </Grid>
    )
}

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      firstName
      lastName
      points
      fallPoints
      springPoints
      summerPoints
      fallPercentile
      springPercentile
      summerPercentile
    }
  }
`;

export default MentorPairTab;