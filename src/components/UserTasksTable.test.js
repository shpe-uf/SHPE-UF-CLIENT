import React from "react";
import { render, screen } from "@testing-library/react";
import UserTasksTable from "./UserTasksTable";

const mockUser = {
  tasks: [
    { name: "Attend GBM", startDate: "2026-01-15", points: 5 },
    { name: "Volunteer at Outreach", startDate: "2026-02-01", points: 10 },
  ],
};

describe("UserTasksTable", () => {
  it("matches snapshot when populated with tasks", () => {
    const { container } = render(<UserTasksTable user={mockUser} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a row per task with the expected cell data", () => {
    render(<UserTasksTable user={mockUser} />);

    expect(screen.getByText("Attend GBM")).toBeInTheDocument();
    expect(screen.getByText("Volunteer at Outreach")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(
      mockUser.tasks.length + 1
    ); // +1 header row
  });

  it("matches snapshot and shows the empty-state placeholder when user is undefined", () => {
    const { container } = render(<UserTasksTable user={undefined} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the empty-state message when user is undefined", () => {
    render(<UserTasksTable user={undefined} />);

    expect(screen.getByText(/no tasks on record/i)).toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });

  it("renders the empty-state message when the user has no tasks", () => {
    render(<UserTasksTable user={{ tasks: [] }} />);

    expect(screen.getByText(/no tasks on record/i)).toBeInTheDocument();
  });
});
