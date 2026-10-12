import React from "react";
import { render, screen, within } from "@testing-library/react";
import RankingMembership from "./RankingMembership";

const mockUsers = [
  {
    firstName: "Low",
    lastName: "Scorer",
    year: "Senior",
    email: "low@example.com",
    fallPoints: 2,
  },
  {
    firstName: "High",
    lastName: "Scorer",
    year: "Junior",
    email: "high@example.com",
    fallPoints: 20,
  },
  {
    firstName: "Zero",
    lastName: "Scorer",
    year: "Freshman",
    email: "zero@example.com",
    fallPoints: 0,
  },
];

describe("RankingMembership", () => {
  it("matches snapshot when populated with users", () => {
    const { container } = render(
      <RankingMembership users={mockUsers} points="fall" />
    );
    expect(container).toMatchSnapshot();
  });

  it("sorts rows by the given points field descending and excludes zero scorers", () => {
    render(<RankingMembership users={mockUsers} points="fall" />);

    const rows = screen.getAllByRole("row").slice(1); // drop header
    const namesInOrder = rows.map(
      (row) => within(row).getAllByRole("cell")[1].textContent.trim()
    );

    expect(namesInOrder).toEqual(["High Scorer", "Low Scorer"]);
    expect(screen.queryByText(/Zero Scorer/)).not.toBeInTheDocument();
  });

  it("matches snapshot and shows the empty-state placeholder when there are no users", () => {
    const { container } = render(
      <RankingMembership users={[]} points="fall" />
    );
    expect(container).toMatchSnapshot();
  });

  it("shows the empty-state message when there are no users", () => {
    render(<RankingMembership users={[]} points="fall" />);

    expect(
      screen.getByText(/no users at this moment/i)
    ).toBeInTheDocument();
  });
});
