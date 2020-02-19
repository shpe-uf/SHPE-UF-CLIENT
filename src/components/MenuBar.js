import React, { useContext } from "react";
import {
  Menu,
  Container,
  Dropdown,
  Responsive,
  Button,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

import logo from "../assets/images/logo.png";

function MenuBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Responsive minWidth={992}>
        <Menu inverted>
          <Container>
            <Menu.Item className="brand-logo" as={Link} to="/">
              <img src={logo} alt="" />
            </Menu.Item>
            <Menu.Item as={Link} to="/about">
              About Us
            </Menu.Item>
            <Menu.Item as={Link} to="/alumni">
              Alumni
            </Menu.Item>
            <Menu.Item as={Link} to="/eboard">
              E-Board
            </Menu.Item>
            <Menu.Item as={Link} to="/devteam">
              Dev Team
            </Menu.Item>
            <Menu.Item as={Link} to="/sponsors">
              Sponsors
            </Menu.Item>

            <Menu.Menu position="right">
              {user ? (
                <>
                  <Dropdown pointing item className="email" text={user.email}>
                    <Dropdown.Menu>
                      {localStorage.getItem('permission') === 'admin' &&
                      <Dropdown.Item as={Link} to="/admin">
                        Admin Panel
                      </Dropdown.Item>
                      }
                      <Dropdown.Item as={Link} to="/profile">
                        My Profile
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/points">
                        Points Program
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/corporations">
                        Corporate Database
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/classSharing">
                        Class Sharing
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/alumnidirectory">
                        Alumni Directory
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={logout}>
                        <p className="logout">Logout</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <Menu.Item>
                  <Button
                    content="Members"
                    icon="user"
                    labelPosition="left"
                    as={Link}
                    to="/login"
                  />
                </Menu.Item>
              )}
            </Menu.Menu>
          </Container>
        </Menu>
      </Responsive>

      <Responsive maxWidth={991}>
        <Menu inverted>
          <Container>
                <Dropdown
                  pointing
                  item
                  text="Menu"
                  className="brand-logo"
                >
                  <Dropdown.Menu>
                    <Dropdown.Item className="brand-logo" as={Link} to="/">
                      Home
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/about">
                      About Us
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/alumni">
                      Alumni
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/eboard">
                      E-Board
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/devteam">
                      Dev Team
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/sponsors">
                      Sponsors
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

            <Menu.Menu position="right">
              {user ? (
                <>
                  <Dropdown
                    pointing
                    item
                    className="email"
                    text={user.email}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/admin">
                        Admin Panel
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/profile">
                        My Profile
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/points">
                        Points Program
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/corporateDatabase">
                        Corporate Database
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/classSharing">
                        Corporate Database
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/alumnidirectory">
                        Alumni Directory
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={logout}>
                        <p className="logout">Logout</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <Menu.Item>
                  <Button icon as={Link} to="/login">
                    <Icon name="sign-in" />
                  </Button>
                </Menu.Item>
              )}
            </Menu.Menu>
          </Container>
        </Menu>
      </Responsive>
    </>
  );
}

export default MenuBar;
