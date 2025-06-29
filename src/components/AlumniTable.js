import React, { useState } from "react";
import '../App.css';
import { Button, Modal, Grid, Table, Dimmer, Loader } from "semantic-ui-react";
import locationSrc from "../assets/images/location.svg";
import emailSrc from "../assets/images/email.svg";
import linkedinSrc from "../assets/images/linkedin-rounded.svg";
import placeholder from "../assets/images/placeholder.png";

function AlumniTable({ alumnis }) {
  const [filter, setFilter] = useState("");
  const [alumniProfileModal, setAlumniProfileModal] = useState(false);
  const [alumniProfile, setAlumniProfile] = useState({});
  console.log(JSON.stringify(alumnis))

  if (filter !== "") {
    alumnis = alumnis.filter((alumni) => {
      const name = `${alumni.firstName} ${alumni.lastName}`.toLowerCase();
      return name.includes(filter.toLowerCase());
    });
  }

  const openModal = () => setAlumniProfileModal(true);
  const closeModal = () => {
    setAlumniProfile({});
    setAlumniProfileModal(false);
  };
  const showProfile = (alumni) => {
    setAlumniProfile(alumni);
    openModal();
  };

  return (
    <>
      <div className="alumni-container">
        {alumnis.map((alumni, idx) => (
          <div className="alumni-card" key={idx}>
            <img src={placeholder} style={{ backgroundSize: "cover" }} alt="" className="alumni-avatar" />
            <div className="alumni-details">
              <h3 className="alumni-name">{`${alumni.lastName}, ${alumni.firstName}`}</h3>
              <p className="alumni-subtext">
                {alumni.grad.major}
                {alumni.grad.year ? ` (${alumni.grad.year})` : ""}
              </p>
              <p className="alumni-subtext">
                {alumni.undergrad.major}
                {alumni.undergrad.year ? ` (${alumni.undergrad.year})` : ""}
              </p>
              <p className="alumni-subtext">{alumni.employer}</p>
              <p className="alumni-subtext">{alumni.position}</p>
              <p className="alumni-location">
                <img src={locationSrc} alt="" className="alumni-icon" />
                {`${alumni.location.city}, ${alumni.location.state}`}
              </p>
              <div className="alumni-actions">
                <a
                  href={alumni.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alumni-icon-button"
                >
                  <img src={linkedinSrc} alt="" className="alumni-icon" />
                </a>
                <a href={`mailto:${alumni.email}`} className="alumni-icon-button">
                  <img src={emailSrc} alt="" className="alumni-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dimmer active={!alumnis} inverted>
        <Loader />
      </Dimmer>

      <Modal open={alumniProfileModal} size="tiny" closeOnEscape closeOnDimmerClick={false}>
        <Modal.Header>
          <h2>Alumni Profile</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h3>{`${alumniProfile.lastName}, ${alumniProfile.firstName}`}</h3>
                <Table striped selectable unstackable>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell><b>Email:</b></Table.Cell>
                      <Table.Cell>{alumniProfile.email || "Loading"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Location:</b></Table.Cell>
                      <Table.Cell>
                        {alumniProfile.location
                          ? `${alumniProfile.location.city}, ${alumniProfile.location.state}, ${alumniProfile.location.country}`
                          : "Loading"}
                      </Table.Cell>
                    </Table.Row>
                    {alumniProfile.employer && alumniProfile.position && (
                      <>
                        <Table.Row>
                          <Table.Cell><b>Employer:</b></Table.Cell>
                          <Table.Cell>{alumniProfile.employer}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell><b>Position:</b></Table.Cell>
                          <Table.Cell>{alumniProfile.position}</Table.Cell>
                        </Table.Row>
                      </>
                    )}
                    <Table.Row>
                      <Table.Cell><b>Undergraduate Education</b></Table.Cell>
                      <Table.Cell></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>University:</b></Table.Cell>
                      <Table.Cell>{alumniProfile.undergrad?.university || "Loading"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Major:</b></Table.Cell>
                      <Table.Cell>{alumniProfile.undergrad?.major || "Loading"}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell><b>Graduation Year:</b></Table.Cell>
                      <Table.Cell>{alumniProfile.undergrad?.year || "Loading"}</Table.Cell>
                    </Table.Row>
                    {alumniProfile.grad?.university && (
                      <>
                        <Table.Row>
                          <Table.Cell><b>Graduate Education</b></Table.Cell>
                          <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell><b>University:</b></Table.Cell>
                          <Table.Cell>{alumniProfile.grad.university}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell><b>Major:</b></Table.Cell>
                          <Table.Cell>{alumniProfile.grad.major}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell><b>Graduation Year:</b></Table.Cell>
                          <Table.Cell>{alumniProfile.grad.year}</Table.Cell>
                        </Table.Row>
                      </>
                    )}
                    <Table.Row>
                      <Table.Cell><b>LinkedIn Profile:</b></Table.Cell>
                      <Table.Cell>
                        <a href={alumniProfile.linkedin} target="_blank" rel="noopener noreferrer">
                          Link
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Button color="grey" onClick={closeModal}>Close</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default AlumniTable;
