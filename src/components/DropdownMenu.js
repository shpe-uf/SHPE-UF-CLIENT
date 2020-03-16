import React from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownMenu({ title }) {
    console.log("TITLE: ", title);
  return (    
    <Dropdown inline text={title = "Major"}>
      <Dropdown.Menu>
          <Dropdown.Item text="Major"/>
          <Dropdown.Item text="Year"/>
          <Dropdown.Item text="Country of Origin"/>
          <Dropdown.Item text="Sex"/>
          <Dropdown.Item text="Ethnicity"/>
          <Dropdown.Item text="Class Sharing"/>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
