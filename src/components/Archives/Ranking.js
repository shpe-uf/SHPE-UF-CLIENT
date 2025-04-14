import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { csv } from "d3-request";
import url from "./team.csv";  // Change it to the used csv file name

function fetchCSVData(url, callback) {
  csv(url, (data) => {
    const SHPEMAP = new Map();
    data.forEach((team) => {
      const points = team[" Points"].trim(); 
      const teamName = team.Team;
      if (!SHPEMAP.has(points)) {
        SHPEMAP.set(points, [teamName]);
      } else {
        SHPEMAP.get(points).push(teamName);
      }
    });
    const entries = Array.from(SHPEMAP.entries());
    entries.sort(([a], [b]) => b - a);
    if (callback) {
      callback(null, entries);
    }
  });
}

const CSV = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCSVData(url, (error, entries) => {
      if (!error) {
        console.log("Entries:", entries); 
        setData(entries);
      }
    });
  }, []);

  return data;
};

const Ranking = () => {
  const rankings = CSV();

  const [hidePodium, setHidePodium] = useState(false);

  useEffect(() => {
    if (rankings.length > 0) {
      const topThreeTeams = rankings.slice(0, 3);
      const pointsSets = [[], [], []];

      for (let i = 0; i < topThreeTeams.length; i++) {
        const [points] = topThreeTeams[i];
        const teamsWithSamePoints = rankings.filter(([p]) => p === points);
        teamsWithSamePoints.forEach(([, teamName]) => {
          pointsSets[i].push(teamName);
        });
      }

      const flattenedPointsSets = pointsSets.map((arr) => arr.flat());

      const hidePodium = flattenedPointsSets.some((pointsSet) => new Set(pointsSet).size > 3);

      setHidePodium(hidePodium);
    }
  }, [rankings]);

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>{hidePodium ? "All Teams 1-10:" : "Teams 4-10:"}</h2>
      <Table striped selectable unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Team Name</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {hidePodium
            ? rankings.slice(0, 10).map(([points, teamNames], index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{teamNames.join(", ")}</Table.Cell>
                  <Table.Cell>{points}</Table.Cell>
                </Table.Row>
              ))
            : rankings.slice(3, 10).map(([points, teamNames], index) => (
                <Table.Row key={index}>
                  <Table.Cell>{index + 4}</Table.Cell>
                  <Table.Cell>{teamNames.join(", ")}</Table.Cell>
                  <Table.Cell>{points}</Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Ranking;
