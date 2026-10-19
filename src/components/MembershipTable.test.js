import React from "react";
import { render, screen } from "@testing-library/react";
import MembershipTable from "./MembershipTable";

const mockUsers = [
  { firstName: "Veronica", lastName: "Valdez", permission: "Admin" },
  { firstName: "Alex", lastName: "Chen", permission: "Member" },
];

describe("MembershipTable", () => {
  it("matches snapshot when populated with users", () => {
    const { container } = render(<MembershipTable users={mockUsers} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a row per user with name and permission", () => {
    render(<MembershipTable users={mockUsers} />);

    expect(screen.getByText("Valdez, Veronica")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Chen, Alex")).toBeInTheDocument();
    expect(screen.getByText("Member")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(mockUsers.length + 1); // +1 header row
  });

  it("matches snapshot and shows the empty-state placeholder when there are no users", () => {
    const { container } = render(<MembershipTable users={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("shows the empty-state message when there are no users", () => {
    render(<MembershipTable users={[]} />);

    expect(
      screen.getByText(/no users at this moment/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });
});
