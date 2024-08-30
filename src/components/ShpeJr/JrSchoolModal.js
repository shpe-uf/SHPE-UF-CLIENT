import React from "react";
import {
  Icon,
  Button,
  Modal,
  Image,
  Header,
  Grid,
} from "semantic-ui-react";

function JrSchoolModal(schoolName, description, pic){
    const [open, setOpen] = React.useState(false);
    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen = {() =>setOpen(true)}
            open = {open}
            trigger={
                <Grid verticalAlign="middle" columns={2} centered>
                  <Button fluid>Learn more</Button>
                </Grid>
              }
        >
        <Modal.Header>{schoolName}</Modal.Header>
        <Modal.Content image>
            <Grid>
                <Grid.Column width = {5}>
                    <Image size = "medium" src= {pic} wrapped/>
                </Grid.Column>
                <Grid.Column width={11}>
                    <Header>About</Header>
                    <p>{description}</p>
                </Grid.Column>
            </Grid>
        </Modal.Content>
        <Modal.Actions>
            <Button
                content = "Close"
                labelPosition="right"
                icon = "checkmark"
                onClick={()=> setOpen(false)}
                positive
            />
        </Modal.Actions>

        </Modal>

    );
}

export default JrSchoolModal;