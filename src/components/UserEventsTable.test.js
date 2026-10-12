import React from "react";
import { render, screen } from "@testing-library/react";
import UserEventsTable from "./UserEventsTable";

const mockUser = {
  events: [
    { name: "Fall GBM 1", category: "General Body Meeting", createdAt: "2026-01-15T00:00:00.000Z", points: 1 },
    { name: "Resume Workshop", category: "Workshop", createdAt: "2026-01-20T00:00:00.000Z", points: 2 },
    { name: "Cabinet Sync", category: "Cabinet Meeting", createdAt: "2026-01-25T00:00:00.000Z", points: 1 },
  ],
};

describe("UserEventsTable", () => {
  it("matches snapshot when populated with events across categories", () => {
    const { container } = render(<UserEventsTable user={mockUser} />);
    expect(container).toMatchSnapshot();
  });

  it("groups events under their category heading and renders event rows", () => {
    render(<UserEventsTable user={mockUser} />);

    expect(
      screen.getByRole("heading", { name: "General Body Meeting" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Workshop" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Cabinet Meeting" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Miscellaneous" })
    ).not.toBeInTheDocument();

    expect(screen.getByText("Fall GBM 1")).toBeInTheDocument();
    expect(screen.getByText("Resume Workshop")).toBeInTheDocument();
    expect(screen.getByText("Cabinet Sync")).toBeInTheDocument();
  });

  it("matches snapshot and shows the empty-state placeholder when the user has no events", () => {
    const { container } = render(<UserEventsTable user={{ events: [] }} />);
    expect(container).toMatchSnapshot();
  });

  it("shows the empty-state message when the user has no events", () => {
    render(<UserEventsTable user={{ events: [] }} />);

    expect(screen.getByText(/no events on record/i)).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });
});
