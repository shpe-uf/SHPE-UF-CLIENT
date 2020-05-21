import React, { useState } from "react";
import {
  Table,
  Dimmer,
  Loader,
  Icon,
  Button,
  Modal,
  Grid
} from "semantic-ui-react";

function AlumniTable({ alumnis }) {
  const [alumniProfileModal, setAlumniProfileModal] = useState(false);
  const [alumniProfile, setAlumniProfile] = useState({});

  const openModal = name => {
    if (name === "alumniProfile") {
      setAlumniProfileModal(true);
    }
  };

  const closeModal = name => {
    if (name === "alumniProfile") {
      setAlumniProfile({});
      setAlumniProfileModal(false);
    }
  };

  function getAlumniProfile(alumniProfile) {
    setAlumniProfile(alumniProfile);
  }

  return (
    <>
      <div className="table-responsive">
        <Dimmer active={alumnis ? false : true} inverted>
          <Loader />
        </Dimmer>
        <Table striped selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Undergrad. Major</Table.HeaderCell>
              <Table.HeaderCell>Grad. Major</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Employer</Table.HeaderCell>
              <Table.HeaderCell>Position</Table.HeaderCell>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">LinkedIn</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Profile</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {alumnis &&
              alumnis.map((alumni, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    {alumni.lastName}, {alumni.firstName}
                  </Table.Cell>
                  <Table.Cell>{alumni.undergrad.major}</Table.Cell>
                  <Table.Cell>{alumni.grad.major}</Table.Cell>
                  <Table.Cell>{alumni.email}</Table.Cell>
                  <Table.Cell>{alumni.employer}</Table.Cell>
                  <Table.Cell>{alumni.position}</Table.Cell>
                  <Table.Cell>
                    {alumni.location.city}, {alumni.location.state}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button icon href={alumni.linkedin} target="_blank">
                      <Icon name="linkedin square" />
                    </Button>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button
                      icon
                      onClick={() => {
                        getAlumniProfile(alumni);
                        openModal("alumniProfile");
                      }}
                    >
                      <Icon name="info" />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>

      <Modal
        open={alumniProfileModal}
        size="tiny"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Alumni Profile</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h3>
                  {alumniProfile.lastName}, {alumniProfile.firstName}
                </h3>
                <div className="table-responsive" style={{ marginBottom: 16 }}>
                  <Table striped selectable unstackable>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <b>Email:</b>
                        </Table.Cell>
                        <Table.Cell>
                          {alumniProfile.email ? (
                            <p>{alumniProfile.email}</p>
                          ) : (
                            <p>Loading</p>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <b>Location:</b>
                        </Table.Cell>
                        <Table.Cell>
                          {alumniProfile.location ? (
                            <p>
                              {alumniProfile.location.city},{" "}
                              {alumniProfile.location.state},{" "}
                              {alumniProfile.location.country}
                            </p>
                          ) : (
                            <p>Loading</p>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      {alumniProfile.employer !== "" &&
                        (alumniProfile.position !== "" && (
                          <>
                            <Table.Row>
                              <Table.Cell>
                                <b>Employer:</b>
                              </Table.Cell>
                              <Table.Cell>
                                {alumniProfile ? (
                                  <p>{alumniProfile.employer}</p>
                                ) : (
                                  <p>Loading</p>
                                )}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <b>Position:</b>
                              </Table.Cell>
                              <Table.Cell>
                                {alumniProfile ? (
                                  <p>{alumniProfile.position}</p>
                                ) : (
                                  <p>Loading</p>
                                )}
                              </Table.Cell>
                            </Table.Row>
                          </>
                        ))}
                      <Table.Row>
                        <Table.Cell>
                          <b>Undergraduate Education</b>
                        </Table.Cell>
                        <Table.Cell></Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <b>University:</b>
                        </Table.Cell>
                        <Table.Cell>
                          {alumniProfile.undergrad ? (
                            <p>{alumniProfile.undergrad.university}</p>
                          ) : (
                            <p>Loading</p>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <b>Major:</b>
                        </Table.Cell>
                        <Table.Cell>
                          {alumniProfile.undergrad ? (
                            <p>{alumniProfile.undergrad.major}</p>
                          ) : (
                            <p>Loading</p>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <b>Graduation Year:</b>
                        </Table.Cell>
                        <Table.Cell>
                          {alumniProfile.undergrad ? (
                            <p>{alumniProfile.undergrad.year}</p>
                          ) : (
                            <p>Loading</p>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      {alumniProfile.grad &&
                        alumniProfile.grad.university !== "" && (
                          <>
                            <Table.Row>
                              <Table.Cell>
                                <b>Graduate Education</b>
                              </Table.Cell>
                              <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <b>University:</b>
                              </Table.Cell>
                              <Table.Cell>
                                {alumniProfile.grad ? (
                                  <p>{alumniProfile.grad.university}</p>
                                ) : (
                                  <p>Loading</p>
                                )}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <b>Major:</b>
                              </Table.Cell>
                              <Table.Cell>
                                {alumniProfile.grad ? (
                                  <p>{alumniProfile.grad.major}</p>
                                ) : (
                                  <p>Loading</p>
                                )}
                              </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                              <Table.Cell>
                                <b>Graduation Year:</b>
                              </Table.Cell>
                              <Table.Cell>
                                {alumniProfile.grad ? (
                                  <p>{alumniProfile.grad.year}</p>
                                ) : (
                                  <p>Loading</p>
                                )}
                              </Table.Cell>
                            </Table.Row>
                          </>
                        )}
                      <Table.Row>
                        <Table.Cell>
                          <b>LinkedIn Profile:</b>
                        </Table.Cell>
                        <Table.Cell>
                          {alumniProfile.email ? (
                            <a href={alumniProfile.linkedin} target="_blank">Link</a>
                          ) : (
                            <p>Loading</p>
                          )}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
                <Button
                  type="reset"
                  color="grey"
                  onClick={() => closeModal("alumniProfile")}
                >
                  Close
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default AlumniTable;
