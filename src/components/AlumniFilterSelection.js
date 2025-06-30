import React, { useState, useEffect } from "react";
import { Dropdown, Form, Button, Icon } from "semantic-ui-react";
import major from "../assets/options/major.json";
import "../App.css";

export default function AlumniFilterSelection({
  filters,
  onAddFilter,
}) {
  const [category, setCategory] = useState("Name");
  const [filterVal, setFilterVal] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const fullSelection = {
    Name: "",
    "Undergrad Major": major,
    "Grad Major": major,
    Location: "",
    Employer: "",
    "Grad Year": "",
  };

  const dropdownOptions = Object.keys(fullSelection).map(k => ({
    text: k,
    value: k,
  }));

  const handleAdd = () => {
    const val = filterVal.trim();
    if (!val) return;
    if (!filters[category].includes(val)) {
      onAddFilter(category, val);
    }
    setFilterVal("");
  };

  return (
    <div
      className="alumni-filter-section"
      style={{ padding: "0.2rem", paddingRight: "3rem" }}
    >

      {fullSelection[category] === "" ? (
        <Form onSubmit={e => { e.preventDefault(); handleAdd(); }}>
          <Form.Field>
            <input
              className="alumni-filter-input"
              placeholder={`Search ${category}`}
              value={filterVal}
              onChange={e => setFilterVal(e.target.value)}
              style={{ minWidth: width < 750 ? "160px" : "240px" }}
            />
          </Form.Field>
        </Form>
      ) : (
        <Dropdown
          className="alumni-filter-input"
          fluid
          search
          selection
          placeholder={`Select ${category}`}
          options={fullSelection[category]}
          value={filterVal}
          onChange={(_, d) => setFilterVal(d.value)}
          style={{ minWidth: width < 750 ? "160px" : "240px" }}
        />
      )}

      <Button icon onClick={handleAdd} className="alumni-filter-btn">
        <Icon name="search" />
      </Button>

      <Dropdown
        className="alumni-dropdown"
        options={dropdownOptions}
        value={category}
        onChange={(_, d) => setCategory(d.value)}
        selection
        icon="filter"
      />
    </div>
  );
}

