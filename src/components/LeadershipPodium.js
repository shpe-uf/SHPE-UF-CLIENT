import React, { useState, useEffect } from "react";
import "../App.css";
import { csv } from "d3-request";
import url from "./test.csv"; // Change csv file name and location when used.

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

const LeadershipPodium = () => {
  const [topThree, setTopThree] = useState([]);
  useEffect(() => {
    fetchCSVData(url, (error, entries) => {
      if (!error) {
        const topThreeTeams = entries.slice(0, 3);
  
        const pointsSets = [[], [], []];
  
        for (let i = 0; i < topThreeTeams.length; i++) {
          const [points] = topThreeTeams[i];
          const teamsWithSamePoints = entries.filter(([p]) => p === points);
          teamsWithSamePoints.forEach(([, teamName]) => {
            pointsSets[i].push(teamName);
          });
        }
  
        const flattenedPointsSets = pointsSets.map((arr) => arr.flat());
  
        console.log("Flattened points sets:", flattenedPointsSets);
  
        const hidePodium = flattenedPointsSets.some((pointsSet) => new Set(pointsSet).size > 3);
  
        if (hidePodium) {
          setTopThree([]);
        } else {
          setTopThree(topThreeTeams);
        }
      }
    });
  }, []);  

  return (
    <div className="podium">
      <div className="container">
        {topThree.map(([points, teamNames], index) => (
          <div className="rank" key={index} id={index === 0 ? "one" : index === 1 ? "two" : "three"}>
            <p className="label" id={`l-${index === 0 ? "one" : index === 1 ? "two" : "three"}`}>
              {teamNames.map((teamName, idx) => (
                <React.Fragment key={idx}>
                  {teamName}
                  {idx !== teamNames.length - 1 && <br />} 
                </React.Fragment>
              ))}
            </p>
            <div className="rank-column">{index + 1}</div>
            <p className="points">{points} Points</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipPodium;
