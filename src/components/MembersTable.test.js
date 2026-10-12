import React from "react";
import { render, screen } from "@testing-library/react";
import MembersTable from "./MembersTable";

const mockUsers = [
  {
    firstName: "Veronica",
    lastName: "Valdez",
    username: "vvaldez",
    email: "veronica@example.com",
    fallPoints: 10,
    springPoints: 5,
    summerPoints: 0,
    points: 15,
  },
  {
    firstName: "Alex",
    lastName: "Chen",
    username: "achen",
    email: "alex@example.com",
    fallPoints: 2,
    springPoints: 8,
    summerPoints: 1,
    points: 11,
  },
];

const noop = () => {};

describe("MembersTable", () => {
  it("matches snapshot when populated with users", () => {
    const { container } = render(
      <MembersTable users={mockUsers} refetch={noop} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a row per user with the expected cell data", () => {
    render(<MembersTable users={mockUsers} refetch={noop} />);

    expect(screen.getByText("Valdez, Veronica")).toBeInTheDocument();
    expect(screen.getByText("Chen, Alex")).toBeInTheDocument();
    expect(screen.getByText("vvaldez")).toBeInTheDocument();
    expect(screen.getByText("veronica@example.com")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(mockUsers.length + 1); // +1 header row
  });

  it("matches snapshot and shows a loader, not rows, when users is undefined", () => {
    const { container } = render(
      <MembersTable users={undefined} refetch={noop} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders no data rows when users is undefined", () => {
    render(<MembersTable users={undefined} refetch={noop} />);

    expect(screen.getAllByRole("row")).toHaveLength(1); // header only
    expect(screen.queryByText(/@/)).not.toBeInTheDocument();
  });
});
