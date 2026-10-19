import React from "react";
import { render, screen } from "@testing-library/react";
import ListServTable from "./ListServTable";

const mockUsers = [
  { firstName: "A", lastName: "One", listServ: "Yes" },
  { firstName: "B", lastName: "Two", listServ: "No" },
  { firstName: "C", lastName: "Three", listServ: "Yes" },
];

describe("ListServTable", () => {
  it("matches snapshot when populated with a mix of listserv and non-listserv users", () => {
    const { container } = render(<ListServTable users={mockUsers} />);
    expect(container).toMatchSnapshot();
  });

  it("filters out users who are not on the ListServ", () => {
    render(<ListServTable users={mockUsers} />);

    expect(screen.getByText("One, A")).toBeInTheDocument();
    expect(screen.getByText("Three, C")).toBeInTheDocument();
    expect(screen.queryByText("Two, B")).not.toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(3); // header + 2 matching
  });

  it("matches snapshot and shows the empty-state placeholder when nobody is on the ListServ", () => {
    const noneOnListServ = [
      { firstName: "B", lastName: "Two", listServ: "No" },
    ];
    const { container } = render(<ListServTable users={noneOnListServ} />);
    expect(container).toMatchSnapshot();
  });

  it("shows the empty-state message when nobody is on the ListServ", () => {
    const noneOnListServ = [
      { firstName: "B", lastName: "Two", listServ: "No" },
    ];
    render(<ListServTable users={noneOnListServ} />);

    expect(
      screen.getByText(/no users in the listserv at this moment/i)
    ).toBeInTheDocument();
  });
});
