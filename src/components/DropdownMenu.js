import React, { useState } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

function DropdownMenu() {
  var [title, setTitle] = useState("Major");
  var searchTitle = "Search " + title;
  //console.log(title);

  return (
    <Menu>
      <Dropdown item text={title}>
        <Dropdown.Menu>
          <Dropdown.Item
            text="Major"
            onClick={() => {
              setTitle((title = "Major"));
            }}
          />
          <Dropdown.Item
            text="Year"
            onClick={() => {
              setTitle((title = "Year"));
            }}
          />
          <Dropdown.Item
            text="Country of Origin"
            onClick={() => {
              setTitle((title = "Country of Origin"));
            }}
          />
          <Dropdown.Item
            text="Sex"
            onClick={() => {
              setTitle((title = "Sex"));
            }}
          />
          <Dropdown.Item
            text="Ethnicity"
            onClick={() => {
              setTitle((title = "Ethnicity"));
            }}
          />
          <Dropdown.Item
            text="Class Sharing"
            onClick={() => {
              setTitle((title = "Class Sharing"));
            }}
          />
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position="right" fluid>
        <Dropdown item search placeholder={searchTitle}>
          
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

export default DropdownMenu;
