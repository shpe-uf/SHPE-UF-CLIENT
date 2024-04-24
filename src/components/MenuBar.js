import React, { useContext, useState } from "react";
import {
  Menu,
  Container,
  Dropdown,
  Button,
  Icon
} from "semantic-ui-react";
import { Media } from "../Media";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../context/auth";

const logo = "https://shpeuf.s3.amazonaws.com/public/misc/logo.png";



function MenuBar({permission}) {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [isWhatWeDo, setIsWhatWeDo] = useState(false);
  const [isResources, setIsResources] = useState(false);
  const [isGetInvolved, setIsGetInvolved] = useState(false);
  const [isConvention, setIsConvention] = useState(false);
  const [isApplication, setIsApplication] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
 

  const menuStyle = {
    position: 'fixed',
    top: 0,
    left: isOpen ? 0 : '100%', 
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 77, 115)',
    zIndex: 1000, 
  };

  const toggleWhoWeAre = () => {
    setIsWhoWeAreOpen(!isWhoWeAreOpen);
  };

  const toggleWhatWeDo = () => {
    setIsWhatWeDo(!isWhatWeDo);
  }

  const toggleResources = () => {
    setIsResources(!isResources);
  }

  const toggleGetInvolved = () => {
    setIsGetInvolved(!isGetInvolved);
  }

  const toggleConvention = () => {
    setIsConvention(!isConvention);
  }

  const toggleApplication = () => {
    setIsApplication(!isApplication);
  }

  const toggleInfo = () => {
    setIsInfo(!isInfo)
  }

  return (
    <>
      <Media greaterThanOrEqual="computer">
        <Menu inverted>
          <Container>
            <Menu.Item className="brand-logo" as={Link} to="/">
              <img src={logo} alt="" />
            </Menu.Item>
            <Menu.Item as={Link} to="/about">
              About
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
            <Menu.Item as={Link} to="/calendar">
              Calendar
            </Menu.Item>
            <Menu.Item as={Link} to="/resources">
              Resources
            </Menu.Item>            
            <Menu.Item as={Link} to="/contactus">
              Contact Us
            </Menu.Item>
           {/* <Menu.Item as={Link} to="/shpejr">
              SHPE Jr
             </Menu.Item> */} 

            <Menu.Menu position="left">
              {user ? (
                <>
                  <Dropdown pointing item className="email" text={user.email}>
                    <Dropdown.Menu>
                      {permission.includes('admin') &&
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
      </Media>

      <Media lessThan="computer">
        <Menu inverted>
          <Container>
            <Link to="/">
            <div className="imagepp"></div>
            </Link>
            <Menu.Menu position="right" className="profile-view">
              {user ? (
                <>
                  <Dropdown
                    pointing
                    item
                    className="email"
                    trigger={<Icon as={CgProfile} style={{ cursor: 'pointer'}} />}
                  >
                    <Dropdown.Menu style={{ backgroundColor: "rgb(0, 77, 115)"}}>
                      {permission.includes('admin') &&
                      <Dropdown.Item as={Link} to="/admin">
                        <p className="dropdown-item-text">Admin Panel</p>
                      </Dropdown.Item>
                      }
                      <Dropdown.Item as={Link} to="/profile">
                      <p className="dropdown-item-text">My Profile</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/points">
                      <p className="dropdown-item-text">Points</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/corporations">
                      <p className="dropdown-item-text">Corporate Database</p>
                      </Dropdown.Item>
                      {/*<Dropdown.Item as={Link} to="/mentorshpe">
                        MentorSHPE
                    </Dropdown.Item>*/}
                      <Dropdown.Item as={Link} to="/shpeitonetwork">
                      <p className="dropdown-item-text">SHPEito Network</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/shperentals">
                      <p className="dropdown-item-text">SHPE Rentals</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/alumnidirectory">
                      <p className="dropdown-item-text">Alumni Directory</p>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/reimbursementrequest">
                      <p className="dropdown-item-text">Reimbursements</p>
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
            <Menu.Menu position="right">
            <Menu.Item onClick={() => setIsOpen(!isOpen)}>
              <Icon name="sidebar"/>
            </Menu.Item>
            <div style={menuStyle}>
              <Button
                content = "X"
                onClick={() => setIsOpen(false)}
                className="closeButton"
              />
              <ul style={{ listStyleType: 'none', padding: '10px'}}>
                <li className="mobileMenuItems" style={{ paddingTop: '100px'}} onClick={toggleWhoWeAre}>Who We Are{`${'\u00A0'.repeat(36)}>`}</li>
                {isWhoWeAreOpen && (
                  <div style={menuStyle}>
                    <Button
                      content = "X"
                      onClick={() => {setIsOpen(false); setIsWhoWeAreOpen(!isWhoWeAreOpen);}}
                      className="closeButton"
                    />
                    <Button
                      content = "<"
                      onClick={() => {setIsWhoWeAreOpen(!isWhoWeAreOpen);}}
                      className="backButton"
                    />
                    <ul style={{ listStyleType: 'none', padding: '10px'}}>
                      <li className="Headings">Who We Are</li>
                      <li className="subHeadings">Our Group</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhoWeAreOpen(!isWhoWeAreOpen);}}>The Chapter</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhoWeAreOpen(!isWhoWeAreOpen);}}>Sponsors</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhoWeAreOpen(!isWhoWeAreOpen);}}>Alumni</Link></li>
                      <li className="subHeadings">Teams</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhoWeAreOpen(!isWhoWeAreOpen);}}>E-Board</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhoWeAreOpen(!isWhoWeAreOpen);}}>Dev Team</Link></li>
                    </ul>
                  </div>
                )}
              </ul>
              <ul style={{ listStyleType: 'none', padding: '10px'}}>
                <li className="mobileMenuItems" style={{ paddingTop: '5px'}} onClick={toggleWhatWeDo}>What We Do{`${'\u00A0'.repeat(36)}>`}</li>
                {isWhatWeDo && (
                  <div style={menuStyle}>
                    <Button
                      content = "X"
                      onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}
                      className="closeButton"
                    />
                    <Button
                      content = "<"
                      onClick={() => {setIsWhatWeDo(!isWhatWeDo);}}
                      className="backButton"
                    />
                    <ul style={{ listStyleType: 'none', padding: '10px'}}>
                      <li className="Headings">What We Do</li>
                      <li className="subHeadings">Programs & Leadership Opportunities</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Director Positions</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>MentorSHPE</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>First Year Leadership Program</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Design Teams</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>SHPE Jr. Programs</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Goals for Tomorrow Scholarship</Link></li>
                      <li className="subHeadings">Resources & Development</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Professional & Corporate Affairs</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Academics</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Research</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Graduate School</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>K-12</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Transfer Students</Link></li>
                      <li className="subHeadings">Community Building</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Social Events</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Hispanic Culture Promotion</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>SHPE Hangouts</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsWhatWeDo(!isWhatWeDo);}}>Member Culture</Link></li>
                    </ul>
                  </div>
                )}
              </ul>
              <ul style={{ listStyleType: 'none', padding: '10px'}}>
                <li className="mobileMenuItems" style={{ paddingTop: '5px'}} onClick={toggleResources}>Resources{`${'\u00A0'.repeat(40)}>`}</li>
                {isResources && (
                  <div style={menuStyle}>
                    <Button
                      content = "X"
                      onClick={() => {setIsOpen(false); setIsResources(!isResources);}}
                      className="closeButton"
                    />
                    <Button
                      content = "<"
                      onClick={() => {setIsResources(!isResources);}}
                      className="backButton"
                    />
                    <ul style={{ listStyleType: 'none', padding: '10px'}}>
                      <li className="Headings">Resources</li>
                      <li className="subHeadings">Professional</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Bootcamp</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Resume</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Linkedln Network</Link></li>
                      <li className="subHeadings">Academic</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Tutors</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Study Spaces</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Major Guides</Link></li>
                      <li className="subHeadings">Graduate</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Research Basics</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Research 101</Link></li>
                      <li className="subHeadings">SHPE Jr</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Highschool Resources</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsResources(!isResources);}}>Website</Link></li>
                    </ul>
                  </div>
                )}
              </ul>
              <ul style={{ listStyleType: 'none', padding: '10px'}}>
                <li className="mobileMenuItems" style={{ paddingTop: '5px'}} onClick={toggleGetInvolved}>Get Involved{`${'\u00A0'.repeat(36)}>`}</li>
                {isGetInvolved && (
                  <div style={menuStyle}>
                    <Button
                      content = "X"
                      onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}
                      className="closeButton"
                    />
                    <Button
                      content = "<"
                      onClick={() => {setIsGetInvolved(!isGetInvolved);}}
                      className="backButton"
                    />
                    <ul style={{ listStyleType: 'none', padding: '10px'}}>
                      <li className="Headings">Get Involved</li>
                      <li className="subHeadings">Membership</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>SHPE National Membership</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>New Member Interest Form</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>New Member Website</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>How to Get Involved & Stay Up to Date</Link></li>
                      <li className="subHeadings">Socials</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>Instagram</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>WhatsApp Announcements Chat</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>Newsletter</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsGetInvolved(!isGetInvolved);}}>SHPE UF Linktree</Link></li>                      
                    </ul>
                  </div>
                )}
              </ul>
              <ul style={{ listStyleType: 'none', padding: '10px'}}>
                <li className="mobileMenuItems" style={{ paddingTop: '5px'}} onClick={toggleConvention}>Convention{`${'\u00A0'.repeat(38)}>`}</li>
                {isConvention && (
                  <div style={menuStyle}>
                    <Button
                      content = "X"
                      onClick={() => {setIsOpen(false); setIsConvention(!isConvention);}}
                      className="closeButton"
                    />
                    <Button
                      content = "<"
                      onClick={() => {setIsConvention(!isConvention);}}
                      className="backButton"
                    />
                    <ul style={{ listStyleType: 'none', padding: '10px'}}>
                      <li className="Headings">Convention</li>
                      <li className="subHeadings">Convention</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsConvention(!isConvention);}}>Welcome</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsConvention(!isConvention);}}>Annual Info</Link></li>                    
                    </ul>
                  </div>
                )}
              </ul>
              <ul style={{ listStyleType: 'none', padding: '10px'}}>
                <li className="mobileMenuItems" style={{ paddingTop: '5px'}} onClick={toggleApplication}>Applications {`${'\u00A0'.repeat(36)}>`}</li>
                {isApplication && (
                  <div style={menuStyle}>
                    <Button
                      content = "X"
                      onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}
                      className="closeButton"
                    />
                    <Button
                      content = "<"
                      onClick={() => {setIsApplication(!isApplication);}}
                      className="backButton"
                    />
                    <ul style={{ listStyleType: 'none', padding: '10px'}}>
                      <li className="Headings">Applications</li>
                      <li className="subHeadings">Director Positions</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>Graduate Cabinet</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>Secretary Cabinet</Link></li> 
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>Technology Cabinet</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>Marketing Cabinet</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>External Cabinet</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>Internal Cabinet</Link></li>  
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>Corporate Cabinet</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>Treasury Cabinet</Link></li>    
                      <li className="subHeadings">Program Applications</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>MentorSHPE</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsApplication(!isApplication);}}>First Year Leadership Program</Link></li>                 
                    </ul>
                  </div>
                )}
              </ul>
              <ul style={{ listStyleType: 'none', padding: '10px'}}>
                <li className="mobileMenuItems" style={{ paddingTop: '5px'}} onClick={toggleInfo}>SHPEito Info{`${'\u00A0'.repeat(37)}>`}</li>
                {isInfo && (
                  <div style={menuStyle}>
                    <Button
                      content = "X"
                      onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}
                      className="closeButton"
                    />
                    <Button
                      content = "<"
                      onClick={() => {setIsInfo(!isInfo);}}
                      className="backButton"
                    />
                    <ul style={{ listStyleType: 'none', padding: '10px'}}>
                      <li className="Headings">SHPEito Info</li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>My Profile</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>Points Program</Link></li> 
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>Corporate Database</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>SHPEito Network</Link></li>      
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>SHPE Rentals</Link></li> 
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>Alumni Directory</Link></li>
                      <li className="Links"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>Reimbursements</Link></li>  
                      <li className="subHeadings"><Link to="/" onClick={() => {setIsOpen(false); setIsInfo(!isInfo);}}>Logout</Link></li>                
                    </ul>
                  </div>
                )}
              </ul>
            </div>
            </Menu.Menu>
          </Container>
        </Menu>
      </Media>
    </>
  );
}

export default MenuBar;