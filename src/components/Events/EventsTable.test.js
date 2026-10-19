import React from "react";
import { screen } from "@testing-library/react";
import moment from "moment";
import { renderWithMocks } from "../../test-utils";
import { FETCH_USERS_QUERY } from "../../util/graphql";
import EventsTable from "./EventsTable";

// EventsTable always mounts child components that call useQuery/useMutation
// even when closed, so every test needs an ApolloProvider. The
// FETCH_USERS_QUERY mock just silences a console warning; it's unused otherwise.
const apolloMocks = [
  { request: { query: FETCH_USERS_QUERY }, result: { data: { getUsers: [] } } },
];
const render = (ui) => renderWithMocks(ui, { mocks: apolloMocks });

const mockExpiration = "2026-03-01T10:30:00.000Z";

const mockEvents = [
  {
    id: "1",
    name: "GBM 1",
    category: "General Body Meeting",
    expiration: mockExpiration,
    request: true,
    attendance: 40,
    points: 1,
  },
  {
    id: "2",
    name: "Resume Workshop",
    category: "Workshop",
    expiration: mockExpiration,
    request: false,
    attendance: 15,
    points: 2,
  },
];

describe("EventsTable", () => {
  it("matches snapshot when populated with events", () => {
    const { container } = render(<EventsTable events={mockEvents} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a row per event with the expected cell data and request icon", () => {
    const { container } = render(<EventsTable events={mockEvents} />);

    expect(screen.getByText("GBM 1")).toBeInTheDocument();
    expect(screen.getByText("Resume Workshop")).toBeInTheDocument();
    expect(
      screen.getAllByText(
        moment(mockExpiration).local().format("MM/DD/YYYY @ hh:mm A")
      )
    ).toHaveLength(mockEvents.length);
    expect(screen.getAllByRole("row")).toHaveLength(mockEvents.length + 1); // +1 header row

    // GBM 1 has request: true, Resume Workshop has request: false.
    expect(container.querySelectorAll(".request-true")).toHaveLength(1);
    expect(container.querySelectorAll(".request-false")).toHaveLength(1);
  });

  it("matches snapshot and shows the empty-state placeholder when there are no events", () => {
    const { container } = render(<EventsTable events={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the empty-state message when there are no events", () => {
    render(<EventsTable events={[]} />);

    expect(
      screen.getByText(/no events at this moment/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });
});
