import React, { useState, useEffect } from 'react';
import { Grid, Responsive, Segment, Table, Center } from "semantic-ui-react";

const MentorshpeLeaderboard = () => {
  const [topScores, setTopScores] = useState([]);
  const [firstPlace , setFirstPlace] = useState([]);
  const [secondPlace, setSecondPlace] = useState([]);
  const [thirdPlace, setThirdPlace] = useState([]);

  const square = { width: 130, height: 130 }

  useEffect(() => {
    // Define your API endpoint for Google Sheets data
    getLeaderBoard();
  }, []);

  function getLeaderBoard() {
    // put this in .env
    const spreadsheetId = "1p9VAYt3GQoijiyKhXzalZ_vtCjg2tfwQoyLiVBNXUg4";
    const range = "Sheet1!A1:B100"; // Assuming the data is in Sheet1
    // use our api_key and enable google sheets in our google cloud shpe dev
    const API_KEY = 'AIzaSyDxtr8btnZsn1NLuAfSbk13IYkyluCJjIY';
    fetch('https://sheets.googleapis.com/v4/spreadsheets/'+spreadsheetId+'/values/'+range+'?key='+API_KEY)
            .then(response => response.json())
            .then(data => data.values.sort((a, b) => b[1] - a[1]).slice(0, 10))
            .then(data => setScores(data));
  }

  function setScores(data){
    setFirstPlace(data[0]);
    setSecondPlace(data[1]);
    setThirdPlace(data[2]);
    setTopScores(data.slice(3, 10));
  }

  return (
    <div>
      <Responsive minWidth={768}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Segment vertical padded='very'></Segment>
                <Segment vertical>
                  <p className="points-podium-header">{secondPlace[0]}</p>
                </Segment>
                <div className="summer">
                <Segment vertical textAlign='center'>
                  <p className="points-podium">
                    2
                  </p>
                </Segment>
                
                <Segment vertical padded='very'></Segment>
                </div>
                <Segment vertical>
                  <p className="points-podium-inverted">
                    {secondPlace[1]} Points
                  </p>
                </Segment>
                
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Segment vertical>
                  <p className="points-podium-header">{firstPlace[0]}</p>
                </Segment>
                 <div className="summer">
                <Segment vertical textAlign='center'>
                  <p className="points-podium">
                    1
                    </p>
                </Segment>
                <Segment vertical padded='very'></Segment>
                <Segment vertical padded='very'></Segment>
              </div>

              <Segment vertical>
                  <p className="points-podium-inverted">
                    {firstPlace[1]} Points
                  </p>
                </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment vertical padded='very'></Segment>
            <Segment vertical padded='very'></Segment>
                <Segment vertical>
                  <p className="points-podium-header">{thirdPlace[0]}</p>
                </Segment>
                <div className="summer">
                <Segment vertical>
                  <p className="points-podium">
                    3
                  </p>
                </Segment>
              </div>

              <Segment vertical>
                  <p className="points-podium-inverted">
                  {thirdPlace[1]} Points
                  </p>
                </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
      <ul>
      <h1>Teams 4-10</h1>
      <Table striped selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Team Name</Table.HeaderCell>
              <Table.HeaderCell textAlign="left">Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        {topScores.map((score, index) => (
                <Table.Row key={score[0]}>
                  <Table.Cell>{index+4}</Table.Cell>
                  <Table.Cell>{score[0]}</Table.Cell>
                  <Table.Cell>{score[1]}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </ul>
    </div>
  );
};

export default MentorshpeLeaderboard;
