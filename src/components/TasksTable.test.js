import React from "react";
import { screen } from "@testing-library/react";
import { renderWithMocks } from "../test-utils";
import { FETCH_USERS_QUERY } from "../util/graphql";
import TasksTable from "./TasksTable";

// TasksTable owns a useMutation call itself, and always mounts DeleteModal
// and ManualInputModal (which itself runs useQuery/useMutation) even while
// closed — so this needs an ApolloProvider in the tree for every test. The
// FETCH_USERS_QUERY mock just quiets ManualInputModal's query; its result
// isn't exercised by these tests.
const apolloMocks = [
  { request: { query: FETCH_USERS_QUERY }, result: { data: { getUsers: [] } } },
];
const render = (ui) => renderWithMocks(ui, { mocks: apolloMocks });

const mockTasks = [
  {
    id: "1",
    name: "Attend GBM",
    startDate: "2026-01-15",
    endDate: "2026-01-15",
    semester: "Spring 2026",
    attendance: 12,
    points: 5,
  },
  {
    id: "2",
    name: "Volunteer at Outreach",
    startDate: "2026-02-01",
    endDate: "2026-02-01",
    semester: "Spring 2026",
    attendance: 4,
    points: 10,
  },
];

describe("TasksTable", () => {
  it("matches snapshot when populated with tasks", () => {
    const { container } = render(<TasksTable tasks={mockTasks} />);
    expect(container).toMatchSnapshot();
  });

  it("renders a row per task with the expected cell data", () => {
    render(<TasksTable tasks={mockTasks} />);

    expect(screen.getByText("Attend GBM")).toBeInTheDocument();
    expect(screen.getByText("Volunteer at Outreach")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(mockTasks.length + 1); // +1 header row
  });

  it("matches snapshot and shows the empty-state placeholder when there are no tasks", () => {
    const { container } = render(<TasksTable tasks={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the empty-state message when there are no tasks", () => {
    render(<TasksTable tasks={[]} />);

    expect(
      screen.getByText(/no tasks at this moment/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });
});
