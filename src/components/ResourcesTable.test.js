import React from "react";
import { screen } from "@testing-library/react";
import { renderWithMocks as render } from "../test-utils";
import ResourcesTable from "./ResourcesTable";

// ResourcesTable always mounts <DeleteModal>, even while closed, and
// DeleteModal calls useMutation unconditionally — so this needs an
// ApolloProvider in the tree even though ResourcesTable itself has no
// GraphQL calls.

const mockResources = [
  { id: "1", title: "Resume Workshop Slides", createdAt: "2026-01-10" },
  { id: "2", title: "Interview Prep Guide", createdAt: "2026-02-02" },
];

describe("ResourcesTable", () => {
  it("matches snapshot when populated with resources", () => {
    const { container } = render(
      <ResourcesTable resources={mockResources} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a row per resource with the expected cell data", () => {
    render(<ResourcesTable resources={mockResources} />);

    expect(screen.getByText("Resume Workshop Slides")).toBeInTheDocument();
    expect(screen.getByText("Interview Prep Guide")).toBeInTheDocument();
    expect(screen.getByText("2026-01-10")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(mockResources.length + 1); // +1 header row
  });

  it("matches snapshot and shows the empty-state placeholder when there are no resources", () => {
    const { container } = render(<ResourcesTable resources={[]} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the empty-state message when there are no resources", () => {
    render(<ResourcesTable resources={[]} />);

    expect(
      screen.getByText(/no resources at this moment/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });
});
