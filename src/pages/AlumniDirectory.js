import React, { useState } from "react";
import { Container, Grid, Loader, Label } from "semantic-ui-react";
import { useQuery } from "@apollo/client";

import Title from "../components/Title";
import AlumniTable from "../components/AlumniTable";
import AlumniFilterSelection from "../components/AlumniFilterSelection";
import { FETCH_ALUMNIS_QUERY } from "../util/graphql";

export default function AlumniDirectory() {
  // --- fetch ---
  const { data, loading } = useQuery(FETCH_ALUMNIS_QUERY);
  const alumnis = data?.getAlumnis || [];

  // --- filter state in parent ---
  const [filters, setFilters] = useState({
    Name: [],
    "Undergrad Major": [],
    "Grad Major": [],
    Location: [],
    Employer: [],
    "Grad Year": [],
  });

  // add a value to a category (if not already present)
  const addFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category]
        : [...prev[category], value],
    }));
  };

  // remove a value from all categories
  const deleteFilter = value => {
    setFilters(prev => {
      const next = {};
      Object.keys(prev).forEach(k => {
        next[k] = prev[k].filter(x => x !== value);
      });
      return next;
    });
  };

  // flatten for label display
  const flatFilterList = Object.values(filters).flat();

  // apply filters to the alumni list
  const filteredAlumnis = loading
    ? []
    : alumnis.filter(a => {
      const fullName = `${a.firstName} ${a.lastName}`.toLowerCase();

      const nameMatch =
        filters.Name.length === 0 ||
        filters.Name.some(n => fullName.includes(n.toLowerCase()));

      const ugMatch =
        filters["Undergrad Major"].length === 0 ||
        filters["Undergrad Major"].includes(a.undergrad?.major);

      const gradMatch =
        filters["Grad Major"].length === 0 ||
        filters["Grad Major"].includes(a.grad?.major);

      const locStr = `${a.location?.city || ""} ${a.location?.state || ""} ${a.location?.country || ""}`.toLowerCase();
      const locMatch =
        filters.Location.length === 0 ||
        filters.Location.some(l => locStr.includes(l.toLowerCase()));

      const employerMatch =
        filters.Employer.length === 0 ||
        filters.Employer.some(e =>
          (a.employer || "").toLowerCase().includes(e.toLowerCase())
        );

      const yearMatch =
        filters["Grad Year"].length === 0 ||
        filters["Grad Year"].includes(String(a.grad?.year));

      return (
        nameMatch &&
        ugMatch &&
        gradMatch &&
        locMatch &&
        employerMatch &&
        yearMatch
      );
    });

  return (
    <div className="body">
      <Title title="Alumni Directory" />

      {/* filter UI */}
      <AlumniFilterSelection
        filters={filters}
        onAddFilter={addFilter}
      />

      <Container className="body">
        {/* current filters as removable labels */}
        <div style={{ margin: "1em 0" }}>
          {flatFilterList.map(val => (
            <Label
              key={val}
              circular
              size="tiny"
              content={val}
              onRemove={() => deleteFilter(val)}
              style={{ margin: "0 4px 4px 0" }}
            />
          ))}
        </div>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              {loading ? (
                <div style={{ marginTop: "300px" }}>
                  <Loader active>
                    Loading alumni, please wait…
                  </Loader>
                </div>
              ) : (
                <AlumniTable alumnis={filteredAlumnis} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
