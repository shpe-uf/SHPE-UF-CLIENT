import React, { useState } from "react";
import {
  Dropdown,
  Menu,
  Search,
  Container,
  Label,
  Icon,
  Grid
} from "semantic-ui-react";

function DropdownMenu() {
  var [title, setTitle] = useState("Major");
  var [options, setOptions] = useState([
 "Computer Science", "Computer Engineering", "Digital Arts and Sciences", "Biomedical Engineering"
  ]);
  var searchTitle = "Search " + title;
  /*
  <Search.Category
  text={nameOfOption.text}
  onClick={() => console.log(nameOfOption.text)}
></Search.Category>
*/

  return (
    <Container>
      <Menu borderless stackable>
        <Grid>
          <Grid.Row>
            <Grid.Column stretched width={14}>
              <Menu.Item>
                <Search fluid placeholder={searchTitle} results={options} onClick={()=> console.log(options)}/>
              </Menu.Item>
            </Grid.Column>
            <Grid.Column width={2}>
              <Menu.Item position="right">
                <Dropdown className="background-dropdown" item text={title}>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="Major"
                      onClick={() => {
                        setTitle((title = "Major"));
                        setOptions([
                          { text: "Computer Science" },
                          { text: "Computer Engineering" },
                          { text: "Digital Arts and Sciences" },
                          { text: "Biomedical Engineering" }
                        ]);
                      }}
                    />
                    <Dropdown.Item
                      text="Year"
                      onClick={() => {
                        setTitle((title = "Year"));
                        setOptions([
                          { text: "1st Year" },
                          { text: "2nd Year" }
                        ]);
                      }}
                    />
                    <Dropdown.Item
                      text="Country of Origin"
                      onClick={() => {
                        setTitle((title = "Country of Origin"));
                        setOptions([{ text: "Cuba" }, { text: "Venezuela" }]);
                      }}
                    />
                    <Dropdown.Item
                      text="Sex"
                      onClick={() => {
                        setTitle((title = "Sex"));
                        setOptions([{ text: "Female" }, { text: "Male" }]);
                      }}
                    />
                    <Dropdown.Item
                      text="Ethnicity"
                      onClick={() => {
                        setTitle((title = "Ethnicity"));
                        setOptions([{ text: "Hispanic/Latino" }]);
                      }}
                    />
                    <Dropdown.Item
                      text="Class Sharing"
                      onClick={() => {
                        setTitle((title = "Class Sharing"));
                        setOptions([{ text: "COP4600" }]);
                      }}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Menu>

      <p></p>
      <Label circular>
        Computer Science
        <Icon name="delete" />
      </Label>
    </Container>
  );
}

export default DropdownMenu;
