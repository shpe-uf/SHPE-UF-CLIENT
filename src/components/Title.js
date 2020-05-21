import React from "react";
import { Grid, Container, Icon, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Title({ title, adminPath }) {
  return (
    <div style={{ paddingBottom: 16 }}>
      <div className="masthead masthead-application">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h1 className="text-white">{title}</h1>
                {adminPath && (
                  <div className="text-white">
                    <Link className="text-white" to="/admin">
                      Admin Panel
                    </Link>
                    <Icon
                      style={{ marginLeft: 8, marginRight: 8 }}
                      name="angle right"
                    />
                    <Dropdown inline text={title}>
                      <Dropdown.Menu>
                        {title !== "Members" && (
                          <Dropdown.Item
                            as={Link}
                            to="/admin/members"
                            text="Members"
                          />
                        )}
                        {title !== "Events" && (
                          <Dropdown.Item
                            as={Link}
                            to="/admin/events"
                            text="Events"
                          />
                        )}
                        {title !== "Tasks" && (
                          <Dropdown.Item as={Link} to="/admin/" text="Tasks" />
                        )}
                        {title !== "Requests" && (
                          <Dropdown.Item
                            as={Link}
                            to="/admin/requests"
                            text="Requests"
                          />
                        )}
                        {title !== "Statistics" && (
                          <Dropdown.Item
                            as={Link}
                            to="/admin/statistics"
                            text="Statistics"
                          />
                        )}
                        {title !== "Corporate Database" && (
                          <Dropdown.Item
                            as={Link}
                            to="/admin/corporatedatabase"
                            text="Corporate Database"
                          />
                        )}
                        {title !== "Reimbursements" && (
                          <Dropdown.Item
                            as={Link}
                            to="/admin/"
                            text="Reimbursements"
                          />
                        )}
                        {title !== "Archive" && (
                          <Dropdown.Item
                            as={Link}
                            to="/admin/"
                            text="Archive"
                          />
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Title;
