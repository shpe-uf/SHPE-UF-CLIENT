import React from "react";
import { screen } from "@testing-library/react";
import moment from "moment";
import { renderWithMocks as render } from "../test-utils";
import RequestsTable from "./RequestsTable";

// RequestsTable owns useMutation calls itself, so it needs an ApolloProvider
// in the tree even though these tests never fire approve/reject.

const mockCreatedAt = "2026-01-15T10:30:00.000Z";

const mockRequests = [
  {
    firstName: "Veronica",
    lastName: "Valdez",
    username: "vvaldez",
    name: "Resume Workshop",
    type: "event",
    createdAt: mockCreatedAt,
    points: 5,
  },
  {
    firstName: "Alex",
    lastName: "Chen",
    username: "achen",
    name: "Design Sprint",
    type: "task",
    createdAt: mockCreatedAt,
    points: 10,
  },
];

describe("RequestsTable", () => {
  it("matches snapshot when populated with requests", () => {
    const { container } = render(<RequestsTable requests={mockRequests} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a row per request with the expected cell data", () => {
    render(<RequestsTable requests={mockRequests} />);

    expect(screen.getByText("Valdez, Veronica")).toBeInTheDocument();
    expect(screen.getByText("Resume Workshop")).toBeInTheDocument();
    expect(screen.getByText("Chen, Alex")).toBeInTheDocument();
    expect(
      screen.getAllByText(
        moment(mockCreatedAt).local().format("MM/DD/YYYY @ hh:mm A")
      )
    ).toHaveLength(mockRequests.length);
    expect(screen.getAllByRole("row")).toHaveLength(mockRequests.length + 1); // +1 header row
  });

  it("matches snapshot and shows the empty-state placeholder when there are no requests", () => {
    const { container } = render(<RequestsTable requests={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the empty-state message when there are no requests", () => {
    render(<RequestsTable requests={[]} />);

    expect(
      screen.getByText(/no requests at this moment/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });
});
