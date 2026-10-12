import React from "react";
import { render, screen } from "@testing-library/react";
import { csv } from "d3-request";

// Ranking loads data from a local team.csv via d3-request instead of
// props/Apollo. That file doesn't exist in the repo, so mock both it and
// d3-request to exercise the component's logic.
jest.mock("./team.csv", () => "team.csv", { virtual: true });
jest.mock("d3-request");

// eslint-disable-next-line import/first
import Ranking from "./Ranking";

// Ranking shows ranks 4-10 (1-3 are assumed to render elsewhere) unless
// more than 3 teams tie for a top-3 spot, in which case it shows all 10.
function mockCsvRows(rows) {
  csv.mockImplementation((url, callback) => {
    callback(rows);
  });
}

describe("Ranking", () => {
  it("matches snapshot and renders ranks 4-10 when no top-3 ties exist", async () => {
    mockCsvRows([
      { Team: "Team A", " Points": "50" },
      { Team: "Team B", " Points": "40" },
      { Team: "Team C", " Points": "30" },
      { Team: "Team D", " Points": "20" },
      { Team: "Team E", " Points": "10" },
    ]);

    const { container } = render(<Ranking />);

    expect(await screen.findByText("Team D")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders only ranks 4 and 5, excluding the top 3, when there are no ties", async () => {
    mockCsvRows([
      { Team: "Team A", " Points": "50" },
      { Team: "Team B", " Points": "40" },
      { Team: "Team C", " Points": "30" },
      { Team: "Team D", " Points": "20" },
      { Team: "Team E", " Points": "10" },
    ]);

    render(<Ranking />);

    expect(await screen.findByText("Team D")).toBeInTheDocument();
    expect(screen.getByText("Team E")).toBeInTheDocument();
    expect(screen.queryByText("Team A")).not.toBeInTheDocument();
    expect(screen.queryByText("Team B")).not.toBeInTheDocument();
    expect(screen.queryByText("Team C")).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Teams 4-10:" })
    ).toBeInTheDocument();
  });

  it("matches snapshot and renders an empty table body when the CSV yields no rows", () => {
    mockCsvRows([]);

    const { container } = render(<Ranking />);

    expect(screen.getAllByRole("row")).toHaveLength(1); // header only
    expect(container).toMatchSnapshot();
  });
});
