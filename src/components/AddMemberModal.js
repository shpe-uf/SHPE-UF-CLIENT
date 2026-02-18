import React, { useEffect, useMemo, useState } from "react";
import { Modal, Form, Button, Image, Segment, Icon } from "semantic-ui-react";

import ImageCrop from "./ImageCrop";
import placeholder from "../assets/images/placeholder.png";

export const EBOARD_POSITIONS = [
  "President",
  "VP of Research",
  "Secretary",
  "Treasurer",
  "VP of Marketing",
  "VP of Technology",
  "VP of Corporate Affairs",
  "VP of External Affairs",
  "VP of Internal Affairs",
];

export const DEV_POSITIONS = [
  "Scrum Master",
  "Project Manager",
  "Junior Project Manager",
  "Senior Developer",
  "Junior Developer",
];

export const DEV_TEAM_NAMES = ["iOS Team", "Website Team", "Android Team"];

const defaultValues = {
  fullName: "",
  position: "",
  team: "",
  active: true,
  picture: "",
  imageLink: "",
};

// mirrors existing Add Partner modal
const AddMemberModal = ({
  open,
  onClose,
  onSubmit,
  type,
  existingMembers = [],
}) => {
  const normalizedType = type || "eboard";
  const [values, setValues] = useState(defaultValues);
  const [photoPreview, setPhotoPreview] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(defaultValues);
    setPhotoPreview("");
    setErrors({});
  }, [normalizedType, open]);

  const handleChange = (event, data) => {
    const target = data || event.target;
    const { name } = target;
    const value =
      target.type === "checkbox" || target.type === "toggle"
        ? target.checked
        : target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const nextErrors = {};
    if (!values.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!values.position) nextErrors.position = "Select a position.";
    if (normalizedType === "devteam" && !values.team)
      nextErrors.team = "Select a team.";
    if (!values.picture?.trim()) nextErrors.picture = "Provide a link or upload a headshot.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({
      type: normalizedType,
      fullName: values.fullName.trim(),
      position: values.position,
      team: values.team,
      active: values.active,
      picture: values.picture,
    });

    onClose();
  };

  const buildOptions = (list) =>
    list.map((entry) => ({ key: entry, value: entry, text: entry }));

  const positionOptions =
    normalizedType === "eboard"
      ? buildOptions(EBOARD_POSITIONS)
      : buildOptions(DEV_POSITIONS);

  const teamOptions = buildOptions(DEV_TEAM_NAMES);

  const handlePhotoFile = (dataUrl) => {
    setPhotoPreview(dataUrl);
    setValues((prev) => ({ ...prev, picture: dataUrl, imageLink: "" }));
  };

  const handleLinkChange = (e) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, imageLink: value, picture: value }));
    if (value) {
      const img = new window.Image();
      img.onload = () => setPhotoPreview(value);
      img.onerror = () => {
        setPhotoPreview("");
        setValues((prev) => ({ ...prev, picture: "" }));
      };
      img.src = value;
    } else {
      setPhotoPreview("");
      setValues((prev) => ({ ...prev, picture: "" }));
    }
  };

  const activeMembers = existingMembers?.filter((member) => member?.active !== false) || [];

  const headshotSelected = !!values.picture && !values.imageLink;
  const linkSelected = !!values.imageLink;
  const positionSelected = !!values.position;

  const clearHeadshot = () => {
    setPhotoPreview("");
    setValues((prev) => ({ ...prev, picture: "", imageLink: "" }));
  };

  const warningNames = activeMembers
    .filter((member) => {
      if (!positionSelected) return false;
      if (normalizedType === "devteam") return false;
      const samePosition =
        member?.position?.toLowerCase() === values.position.toLowerCase() &&
        member?.active !== false;
      return samePosition;
    })
    .map((member) => member?.name)
    .filter(Boolean);

  const positionWarning = normalizedType !== "devteam" && warningNames.length > 0;

  const disablePositionSelect = normalizedType === "devteam" && !values.team;
  const warningMessage = "There is already an active member with this position.";
  const disableAdd = positionWarning;

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="tiny"
      closeOnEscape
      closeOnDimmerClick={false}
    >
      <Modal.Header
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h2 style={{ margin: 0 }}>
          Add {normalizedType === "eboard" ? "E-Board" : "Dev Team"} Member
        </h2>
        <Button icon="close" color="grey" onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        <Segment.Group className="segment-spacing">
          <Segment>
            {Object.keys(errors).length > 0 && (
              <div className="ui error message">
                <ul className="list">
                  {Object.entries(errors).map(([key, value]) => (
                    <li key={key}>{value}</li>
                  ))}
                </ul>
              </div>
            )}
            <Form>
              <Image
                fluid
                rounded
                src={photoPreview || placeholder}
                className="image-profile"
                style={{ marginBottom: 16 }}
              />

              {positionWarning && (
                <Form.Field className="ui red message">
                  <b>{warningMessage}</b>
                  {warningNames.length > 0 && (
                    <ul style={{ fontSize: "0.9em", marginTop: 4 }}>
                      <li>{warningNames.join(", ")}</li>
                    </ul>
                  )}
                </Form.Field>
              )}

              <Form.Input
                type="text"
                label="Image Link"
                name="imageLink"
                value={values.imageLink}
                placeholder="https://example.com/image.png"
                onChange={handleLinkChange}
                disabled={headshotSelected}
              />
              <Form.Field>
                <label>Headshot</label>
                <ImageCrop
                  setPhotoFile={handlePhotoFile}
                  values={values}
                  type={normalizedType}
                  disabled={linkSelected}
                />
                {headshotSelected && (
                  <Button size="mini" onClick={clearHeadshot} style={{ marginTop: 8 }}>
                    Remove
                  </Button>
                )}
                {errors.picture && (
                  <div className="ui pointing red basic label">{errors.picture}</div>
                )}
              </Form.Field>
              <Form.Input
                type="text"
                label="Full Name"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                error={errors.fullName ? { content: errors.fullName } : null}
              />
              {normalizedType === "devteam" && (
                <Form.Select
                  label="Team"
                  name="team"
                  options={teamOptions}
                  value={values.team}
                  onChange={handleChange}
                  error={errors.team ? { content: errors.team } : null}
                  placeholder="Select a team"
                  search
                />
              )}

              <Form.Select
                label="Position"
                name="position"
                options={positionOptions}
                value={values.position}
                onChange={handleChange}
                error={errors.position ? { content: errors.position } : null}
                placeholder="Select a position"
                search
                disabled={disablePositionSelect}
              />
              <Form.Checkbox
                toggle
                label="Active"
                name="active"
                checked={values.active}
                onChange={handleChange}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
                <Button
                  type="button"
                  color="blue"
                  onClick={handleSubmit}
                  disabled={disableAdd}
                  icon
                  labelPosition="left"
                >
                  <Icon name="plus" />
                  Add Member
                </Button>
              </div>
            </Form>
          </Segment>
        </Segment.Group>
      </Modal.Content>
    </Modal>
  );
};

export default AddMemberModal;
