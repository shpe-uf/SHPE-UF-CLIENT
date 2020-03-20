import React from "react";
import { Dropdown } from "semantic-ui-react";

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    //console.log("PROPS", this.state.title);
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <Dropdown inline text={this.state.title}>
        <Dropdown.Menu>
          <Dropdown.Item
            text="Major"
            onClick={() => {
              this.state.title = "TITLE";
            }}
          />
          <Dropdown.Item
            text="Year"
            onClick={() => console.log("Clicking YEAR")}
          />
          <Dropdown.Item
            text="Country of Origin"
            onClick={() => console.log("Clicking COUNTRY OF ORIGIN")}
          />
          <Dropdown.Item
            text="Sex"
            onClick={() => console.log("Clicking SEX")}
          />
          <Dropdown.Item
            text="Ethnicity"
            onClick={() => console.log("Clicking ETHNICITY")}
          />
          <Dropdown.Item
            text="Class Sharing"
            onClick={() => console.log("Clicking CLASS SHARING")}
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropdownMenu;
