import React, { useMemo, useState } from "react";
import { Table, Button, Icon, Loader } from "semantic-ui-react";
import AddMemberModal from "./AddMemberModal";
import EditMemberModal from "./EditMemberModal";
import ViewMemberModal from "./ViewMemberModal";

const Section = ({ title, type, columns, rows, onAdd }) => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24,
        marginBottom: 30,
      }}
    >
      <h1 style={{ margin: 0 }}>{title}</h1>
      <Button icon labelPosition="left" onClick={() => onAdd(type)}>
        <Icon name="plus" />
        Add
      </Button>
    </div>
    <div className="table-responsive">
      <Table striped selectable unstackable>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.HeaderCell
                key={column.key}
                textAlign={column.center ? "center" : undefined}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.label}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row
              key={row.id}
              style={row.active === false ? { backgroundColor: "#ffe5e5" } : undefined}
            >
              {columns.map((column) => (
                <Table.Cell
                  key={`${row.id}-${column.key}`}
                  textAlign={column.center ? "center" : undefined}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.render ? column.render(row) : row[column.key]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </>
);

const TeamsView = ({
  eboardMembers = [],
  devTeamMembers = [],
  loading,
  onAddMember,
  onEditMember,
}) => {
  const [infoMember, setInfoMember] = useState(null);
  const [infoType, setInfoType] = useState(null);
  const [addModalType, setAddModalType] = useState(null);
  const [editContext, setEditContext] = useState({ open: false, type: null, member: null });

  const eboardRows = useMemo(
    () => eboardMembers.filter((member) => member && member.active !== false),
    [eboardMembers]
  );

  const devRows = useMemo(
    () => devTeamMembers.filter((member) => member && member.active !== false),
    [devTeamMembers]
  );

  const handleInfo = (member, type) => {
    setInfoMember(member);
    setInfoType(type);
  };

  const closeInfo = () => {
    setInfoMember(null);
    setInfoType(null);
  };

  const handleAdd = (type) => {
    setAddModalType(type);
  };

  const closeAdd = () => setAddModalType(null);

  const handleSubmit = (payload) => onAddMember?.(payload);

  const openEditModal = (member, type) => {
    setEditContext({ open: true, type, member });
  };

  const closeEdit = () => setEditContext({ open: false, type: null, member: null });

  const handleEditSubmit = (payload) => onEditMember?.(payload);

  const eboardColumns = useMemo(
    () => [
      { key: "name", label: "Name" },
      { key: "position", label: "Position" },
      {
        key: "active",
        label: "Status",
        center: true,
        width: "120px",
        render: (row) => <strong>{row.active ? "Active" : "Inactive"}</strong>,
      },
      {
        key: "createdAt",
        label: "Created",
        width: "120px",
        render: (row) =>
          row.createdAt ? new Date(row.createdAt).toLocaleDateString() : "--",
      },
      {
        key: "info",
        label: "Info",
        center: true,
        width: "120px",
        render: (row) => (
          <Button icon color="blue" onClick={() => handleInfo(row, "eboard")}>
            <Icon name="info" />
          </Button>
        ),
      },
    ],
    [handleInfo]
  );

  const devColumns = useMemo(
    () => [
      { key: "name", label: "Name" },
      { key: "position", label: "Position" },
      { key: "team", label: "Team" },
      {
        key: "active",
        label: "Status",
        center: true,
        width: "120px",
        render: (row) => <strong>{row.active ? "Active" : "Inactive"}</strong>,
      },
      {
        key: "createdAt",
        label: "Created",
        width: "120px",
        render: (row) =>
          row.createdAt ? new Date(row.createdAt).toLocaleDateString() : "--",
      },
      {
        key: "info",
        label: "Info",
        center: true,
        width: "120px",
        render: (row) => (
          <Button icon color="blue" onClick={() => handleInfo(row, "devteam")}>
            <Icon name="info" />
          </Button>
        ),
      },
    ],
    [handleInfo]
  );

  if (loading && !eboardMembers.length && !devTeamMembers.length) {
    return <Loader active inline="centered" />;
  }

  return (
    <div>
      <Section
        title="E-Board"
        type="eboard"
        columns={eboardColumns}
        rows={eboardRows}
        onAdd={handleAdd}
      />

      <Section
        title="Dev Team"
        type="devteam"
        columns={devColumns}
        rows={devRows}
        onAdd={handleAdd}
      />

      <ViewMemberModal
        open={!!infoMember}
        member={infoMember}
        type={infoType}
        onClose={closeInfo}
        onEdit={(member) => {
          closeInfo();
          openEditModal(member, infoType || "eboard");
        }}
      />

      <AddMemberModal
        open={!!addModalType}
        type={addModalType}
        onClose={closeAdd}
        onSubmit={handleSubmit}
        existingMembers={addModalType === "eboard" ? eboardRows : devRows}
      />

      <EditMemberModal
        open={editContext.open}
        type={editContext.type}
        selectedMember={editContext.member}
        members={editContext.type === "devteam" ? devTeamMembers : eboardMembers}
        onClose={closeEdit}
        onSubmit={(payload) => {
          const result = handleEditSubmit?.(payload);
          if (result?.then) {
            return result.then(() => closeEdit());
          }
          closeEdit();
          return result;
        }}
      />
    </div>
  );
};

export default TeamsView;
