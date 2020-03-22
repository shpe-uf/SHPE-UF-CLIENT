import React, { useState } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

function DropdownMenu() {
  var [title, setTitle] = useState("Major");
  var searchTitle = "Search " + title;
  //console.log(title);

  const majorOptions = [
    { text: "Computer Science" },
    { text: "Agriculture Studies" },
    { text: "Forestry Management" },
    { text: "Biomedical Engineering" }
  ];

  return (
    <Menu secondary>
      <Menu.Item>
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
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Dropdown
            placeholder={searchTitle}
            item
            search
            options={majorOptions}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default DropdownMenu;
