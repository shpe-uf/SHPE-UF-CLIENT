import React from "react";
import { Modal, Grid, Image, Button, Icon } from "semantic-ui-react";

import placeholder from "../assets/images/placeholder.png";

const formatDate = (isoString) => {
  if (!isoString) return "--";
  const date = new Date(isoString);
  return Number.isNaN(date.getTime())
    ? isoString
    : date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
};

const ViewMemberModal = ({ open, member, type, onClose, onEdit }) => {
  if (!member) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="tiny"
      closeOnEscape
      closeOnDimmerClick
    >
      <Modal.Header
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h2 style={{ margin: 0 }}>{type === "devteam" ? "Dev Team Member" : "E-Board Member"}</h2>
        <Button icon="close" color="grey" onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Image
                src={member.picture || placeholder}
                rounded
                centered
                style={{ marginBottom: 16, maxHeight: 180, objectFit: "cover" }}
              />
              <p>
                <strong>Name:</strong> {member.name}
              </p>
              {member.position && (
                <p>
                  <strong>Position:</strong> {member.position}
                </p>
              )}
              {member.team && (
                <p>
                  <strong>Team:</strong> {member.team}
                </p>
              )}
              <p>
                <strong>Status:</strong> {member.active ? "Active" : "Inactive"}
              </p>
              {member.createdAt && (
                <p>
                  <strong>Added:</strong> {formatDate(member.createdAt)}
                </p>
              )}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
                <Button
                  color="blue"
                  onClick={() => onEdit?.(member)}
                  icon
                  labelPosition="left"
                >
                  <Icon name="pencil" />
                  Edit
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default ViewMemberModal;
