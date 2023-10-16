import React, { useState, useEffect } from 'react';
import { Table } from "semantic-ui-react";

const MentorshpeLeaderboard = () => {
  const [topScores, setTopScores] = useState([]);
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
            .then(data => data.values.slice(1).sort((a, b) => b[1] - a[1]).slice(0, 10))
            .then(data => setTopScores(data));
  }

  return (
    <div>
      <h1>Top 10 Scores</h1>
      <ul>
      <Table striped selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Pair Hashtag</Table.HeaderCell>
              <Table.HeaderCell textAlign="left">Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
        {topScores.map((score, index) => (
                <Table.Row key={score[0]}>
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
