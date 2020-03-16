import React from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownMenu({ title }) {
    console.log("TITLE: ", title);
  return (    
    <Dropdown inline text={title = "Major"}>
      <Dropdown.Menu>
          <Dropdown.Item text="Major" onClick={() => console.log("Clicking MAJOR")}/>
          <Dropdown.Item text="Year" onClick={() => console.log("Clicking YEAR")}/>
          <Dropdown.Item text="Country of Origin" onClick={() => console.log("Clicking COUNTRY OF ORIGIN")}/>
          <Dropdown.Item text="Sex" onClick={() => console.log("Clicking SEX")}/>
          <Dropdown.Item text="Ethnicity" onClick={() => console.log("Clicking ETHNICITY")}/>
          <Dropdown.Item text="Class Sharing" onClick={() => console.log("Clicking CLASS SHARING")}/>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
