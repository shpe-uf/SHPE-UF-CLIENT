import React, { useEffect, useState } from "react";
import { Modal, Form, Button, Image, Segment, Icon } from "semantic-ui-react";

import ImageCrop from "./ImageCrop";
import placeholder from "../assets/images/placeholder.png";
import { EBOARD_POSITIONS, DEV_POSITIONS, DEV_TEAM_NAMES } from "./AddMemberModal";

const defaultValues = {
  id: "",
  fullName: "",
  position: "",
  team: "",
  active: true,
  picture: "",
  imageLink: "",
};

const EditMemberModal = ({ open, onClose, onSubmit, type, selectedMember, members = [] }) => {
  const normalizedType = type || "eboard";
  const [values, setValues] = useState(defaultValues);
  const [photoPreview, setPhotoPreview] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open || !selectedMember) {
      setValues(defaultValues);
      setPhotoPreview("");
      setErrors({});
      return;
    }

    const picture = selectedMember.picture || "";
    const isLink = /^https?:/i.test(picture);

    setValues({
      id: selectedMember.id,
      fullName: selectedMember.name || "",
      position: selectedMember.position || "",
      team: selectedMember.team || "",
      active: selectedMember.active !== false,
      picture,
      imageLink: isLink ? picture : "",
    });
    setPhotoPreview(picture);
    setErrors({});
  }, [open, normalizedType, selectedMember]);

  const handleChange = (event, data) => {
    const target = data || event.target;
    const { name } = target;
    const value =
      target.type === "checkbox" || target.type === "toggle"
        ? target.checked
        : target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

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
        setValues((prev) => ({ ...prev, picture: prev.picture === value ? "" : prev.picture }));
      };
      img.src = value;
    } else {
      setPhotoPreview("");
    }
  };

  const headshotSelected = !!values.picture && !values.imageLink;
  const linkSelected = !!values.imageLink;
  const clearPreview = () => {
    setPhotoPreview("");
    setValues((prev) => ({ ...prev, picture: "", imageLink: "" }));
  };

  const activeMembers = members.filter((member) => member?.active !== false && member.id !== values.id);
  const positionSelected = !!values.position;

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
  const warningMessage = "There is already an active member with this position.";
  const disablePositionSelect = normalizedType === "devteam" && !values.team;

  const handleSubmit = () => {
    const nextErrors = {};
    if (!values.id) nextErrors.member = "Select a member to edit.";
    if (!values.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!values.position) nextErrors.position = "Select a position.";
    if (normalizedType === "devteam" && !values.team)
      nextErrors.team = "Select a team.";
    if (!values.picture?.trim()) nextErrors.picture = "Provide a link or upload a headshot.";
    if (positionWarning) nextErrors.position = warningMessage;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSubmit({
      type: normalizedType,
      id: values.id,
      fullName: values.fullName.trim(),
      position: values.position,
      team: values.team,
      active: values.active,
      picture: values.picture,
    });

    onClose();
  };

  const positionOptions =
    normalizedType === "eboard"
      ? EBOARD_POSITIONS.map((pos) => ({ key: pos, value: pos, text: pos }))
      : DEV_POSITIONS.map((pos) => ({ key: pos, value: pos, text: pos }));

  const teamOptions = DEV_TEAM_NAMES.map((team) => ({ key: team, value: team, text: team }));

  const disableForm = !values.id;

  if (!open || !selectedMember) return null;

  return (
    <Modal open={open} onClose={onClose} size="tiny" closeOnEscape closeOnDimmerClick={false}>
      <Modal.Header
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <h2 style={{ margin: 0 }}>
          Edit {normalizedType === "eboard" ? "E-Board" : "Dev Team"} Member
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

              <Form.Input
                type="text"
                label="Image Link"
                name="imageLink"
                value={values.imageLink}
                placeholder="https://example.com/image.png"
                onChange={handleLinkChange}
                disabled={headshotSelected || disableForm}
              />

              <Form.Field>
                <label>Headshot</label>
                <ImageCrop
                  setPhotoFile={handlePhotoFile}
                  values={values}
                  type={normalizedType}
                  disabled={linkSelected || disableForm}
                />
                {headshotSelected && (
                  <Button
                    type="button"
                    size="mini"
                    onClick={clearPreview}
                    disabled={disableForm}
                    style={{ marginTop: 8 }}
                  >
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
                disabled={disableForm}
                error={errors.fullName ? { content: errors.fullName } : null}
              />

              {normalizedType === "devteam" && (
                <Form.Select
                  label="Team"
                  name="team"
                  options={teamOptions}
                  value={values.team}
                  onChange={handleChange}
                  disabled={disableForm}
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
                disabled={disableForm || disablePositionSelect}
                error={errors.position ? { content: errors.position } : null}
                placeholder="Select a position"
                search
              />
              {positionWarning && (
                <Form.Field style={{ color: "#b58105", marginTop: 8 }}>
                  <strong>{warningMessage}</strong>
                  {warningNames.length > 0 && (
                    <div style={{ fontSize: "0.9em", marginTop: 4 }}>
                      {warningNames.join(", ")}
                    </div>
                  )}
                </Form.Field>
              )}

              <Form.Checkbox
                toggle
                label="Active"
                name="active"
                checked={values.active}
                onChange={handleChange}
                disabled={disableForm}
              />

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
                <Button
                  type="button"
                  color="blue"
                  onClick={handleSubmit}
                  icon
                  labelPosition="left"
                  disabled={disableForm || positionWarning}
                >
                  <Icon name="pencil" />
                  Save Changes
                </Button>
              </div>
            </Form>
          </Segment>
        </Segment.Group>
      </Modal.Content>
    </Modal>
  );
};

export default EditMemberModal;
