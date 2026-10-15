import React from "react";
import { render, screen } from "@testing-library/react";
import AlumniTable from "./AlumniTable";

const mockAlumnis = [
  {
    firstName: "Maria",
    lastName: "Lopez",
    undergrad: { major: "Computer Science" },
    grad: { major: "" },
    employer: "Acme Corp",
    position: "Engineer",
    location: { city: "Gainesville", state: "FL" },
    linkedin: "https://linkedin.com/in/test-alumni-fixture-1",
  },
  {
    firstName: "James",
    lastName: "Park",
    undergrad: { major: "Mechanical Engineering" },
    grad: { major: "" },
    employer: "Beta Inc",
    position: "Analyst",
    location: { city: "Orlando", state: "FL" },
    linkedin: "https://linkedin.com/in/test-alumni-fixture-2",
  },
];

describe("AlumniTable", () => {
  it("matches snapshot when populated with alumnis", () => {
    const { container } = render(<AlumniTable alumnis={mockAlumnis} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a row per alumni with the expected cell data", () => {
    render(<AlumniTable alumnis={mockAlumnis} />);

    expect(screen.getByText("Lopez, Maria")).toBeInTheDocument();
    expect(screen.getByText("Park, James")).toBeInTheDocument();
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(mockAlumnis.length + 1); // +1 header row
  });

  it("matches snapshot and shows a loader, not rows, when alumnis is undefined", () => {
    const { container } = render(<AlumniTable alumnis={undefined} />);
    expect(container).toMatchSnapshot();
  });

  it("renders no data rows when alumnis is undefined", () => {
    render(<AlumniTable alumnis={undefined} />);

    expect(screen.getAllByRole("row")).toHaveLength(1); // header only
    expect(screen.queryByText("Lopez, Maria")).not.toBeInTheDocument();
  });
});
