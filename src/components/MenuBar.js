import React, { useContext, useState, useEffect } from "react";
import { Menu, Container, Button, Icon, Dropdown } from "semantic-ui-react";
import { Media } from "../Media";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";
import navData from "../assets/options/navitems.json";

const logo = "https://shpeuf.s3.amazonaws.com/public/misc/logo.png";

function MenuBar({ permission }) {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState();

  const renderDropdown = () => (
    <div className="nav-dropdown">
      {activeItem.dropdownSections.map((section) => (
        <div>
          <p className="section-header">
            <b>{section.label}</b>
          </p>
          <ul className="nav-link-container">
            {section.links.map((link) => (
              <li key={link.label} className="nav-link">
                <Link to={link.path} target={link.target}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderNavItems = () => (
    <Container posiiton="left">
      <Link to={"/"} className="logo-link">
        <div className="brand-logo">
          <img src={logo} alt="" />
        </div>
      </Link>
      {navData.map((item) => (
        <Menu.Item key={item.label} className="menu-item">
          <p
            className="underline"
            onMouseEnter={() => {
              setDropdown(true);
              setActiveItem(item);
            }}
          >
            {item.label}
          </p>
        </Menu.Item>
      ))}
    </Container>
  );

  return (
    <>
      <Media greaterThanOrEqual="computer">
        <div
          onMouseLeave={() => {
            setDropdown(false);
          }}
        >
          <Menu secondary inverted>
            {renderNavItems()}
            <Container position="right">
              <Menu.Item
                as={Link}
                position="right"
                to="/calendar"
                className="calendar-icon"
              >
                <Icon name="calendar outline" />
              </Menu.Item>
              <Menu.Item as={Link} to="/contactus" className="envelope-icon">
                <Icon name="envelope outline" />
              </Menu.Item>
              {/* <Menu.Item as={Link} to="/shpejr">
              SHPE Jr
             </Menu.Item> */}

              {user ? (
                <>``
                  <Dropdown
                    item
                    pointing
                    icon="user circle outline"
                    className="email"
                  >
                    <Dropdown.Menu>
                      {permission.includes("admin") && (
                        <Dropdown.Item as={Link} to="/admin">
                          <p>Admin Panel</p>
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item as={Link} to="/profile">
                        <p>My Profile</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/points">
                        <p>Points Program</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/corporations">
                        <p>Corporate Database</p>
                      </Dropdown.Item>
                      {/*<Dropdown.Item as={Link} to="/mentorshpe">
                        MentorSHPE
                    </Dropdown.Item>*/}
                      <Dropdown.Item as={Link} to="/shpeitonetwork">
                        <p>SHPEito Network</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/shperentals">
                        <p>SHPE Rentals</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/alumnidirectory">
                        <p>Alumni Directory</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/reimbursementrequest">
                        <p>Reimbursements</p>
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
                    style={{ borderRadius: "2rem" }}
                    className="login-button"
                    icon="user circle outline"
                    labelPosition="right"
                    as={Link}
                    to="/login"
                  >
                    <span>LOGIN</span>
                    <Icon name="user outline" />
                  </Button>
                </Menu.Item>
              )}
            </Container>
          </Menu>
          {showDropdown && renderDropdown()}
        </div>
      </Media>
      <Media lessThan="computer">
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
                    {/*<Dropdown.Item as={Link} to="/alumni">
                      Alumni
                    </Dropdown.Item>*/}
                    <Dropdown.Item as={Link} to="/eboard">
                      E-Board
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/devteam">
                      Dev Team
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/sponsors">
                      Partners
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/shpejr">
                      SHPE Jr
                    </Dropdown.Item> 
                    <Dropdown.Item as={Link} to="/calendar">
                      Calendar
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/contactus">
                      Contact Us
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/resources">
                      Resources
                    </Dropdown.Item>
                   {/* <Dropdown.Item as={Link} to="/shpejr">
                      SHPE JR
              </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position="right">
              {user ? (
                <>
                  <Dropdown pointing item className="email" text={user.email}>
                    <Dropdown.Menu>
                      {permission.includes("admin") && (
                        <Dropdown.Item as={Link} to="/admin">
                          Admin Panel
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item as={Link} to="/profile">
                        My Profile
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/points">
                        Points Program
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/corporations">
                        Corporate Database
                      </Dropdown.Item>
                      {/*<Dropdown.Item as={Link} to="/mentorshpe">
                        MentorSHPE
                    </Dropdown.Item>*/}
                      <Dropdown.Item as={Link} to="/shpeitonetwork">
                        SHPEito Network
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/shperentals">
                        SHPE Rentals
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/alumnidirectory">
                        Alumni Directory
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/reimbursementrequest">
                        Reimbursements
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logout} style={{borderBottom: "none"}}>
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
      </Media>
    </>
  );
}

export default MenuBar;
