import React from 'react';
import { Modal, Grid, Form, Button, Dropdown } from 'semantic-ui-react';

function ManualInputModal(props) {
  console.log(props.users)
  return (
    <Modal
      open={props.open}
      size="tiny"
      closeOnEscape={true}
      closeOnDimmerClick={false}
    >
      <Modal.Header>
        <h2>Manual Input</h2>
      </Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              {Object.keys(props.errors).length > 0 && (
                <div className="ui error message">
                  <ul className="list">
                    {Object.values(props.errors).map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Dropdown>

              </Dropdown>
              <Button
                type="reset"
                color="grey"
                onClick={() => props.closeModal("manualInput")}
              >
                Cancel
              </Button>
              <Button type="submit" floated="right">
                Submit
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  )
}

export default ManualInputModal;