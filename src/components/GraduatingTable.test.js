import React from "react";
import { render, screen } from "@testing-library/react";
import GraduatingTable from "./GraduatingTable";

const mockUsers = [
  { firstName: "A", lastName: "One", graduating: "Fall 2026" },
  { firstName: "B", lastName: "Two", graduating: "Not Graduating" },
  { firstName: "C", lastName: "Three", graduating: "Spring 2027" },
];

describe("GraduatingTable", () => {
  it("matches snapshot when populated with a mix of graduating and non-graduating users", () => {
    const { container } = render(<GraduatingTable users={mockUsers} />);
    expect(container).toMatchSnapshot();
  });

  it("filters out users who are Not Graduating", () => {
    render(<GraduatingTable users={mockUsers} />);

    expect(screen.getByText("One, A")).toBeInTheDocument();
    expect(screen.getByText("Three, C")).toBeInTheDocument();
    expect(screen.queryByText("Two, B")).not.toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(3); // header + 2 matching
  });

  it("matches snapshot and shows the empty-state placeholder when nobody is graduating", () => {
    const allNotGraduating = [
      { firstName: "B", lastName: "Two", graduating: "Not Graduating" },
    ];
    const { container } = render(
      <GraduatingTable users={allNotGraduating} />
    );
    expect(container).toMatchSnapshot();
  });

  it("shows the empty-state message when nobody is graduating", () => {
    const allNotGraduating = [
      { firstName: "B", lastName: "Two", graduating: "Not Graduating" },
    ];
    render(<GraduatingTable users={allNotGraduating} />);

    expect(
      screen.getByText(/no users graduating at this moment/i)
    ).toBeInTheDocument();
  });
});
