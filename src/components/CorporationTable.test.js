import React from "react";
import { screen } from "@testing-library/react";
import { renderWithMocks as render } from "../test-utils";
import CorporationTable from "./CorporationTable";

// CorporationTable always mounts <DeleteModal>, even while closed, and
// DeleteModal calls useMutation unconditionally — so this needs an
// ApolloProvider in the tree even though CorporationTable itself never
// queries/mutates in these tests.

const noop = () => {};

const mockCorporations = [
  {
    id: "1",
    name: "Acme Corp",
    shpeSponsor: true,
    industryPartnership: false,
    fallBBQ: true,
    springBBQ: false,
    nationalConvention: true,
    recruitmentDay: false,
  },
  {
    id: "2",
    name: "Beta Inc",
    shpeSponsor: false,
    industryPartnership: false,
    fallBBQ: false,
    springBBQ: false,
    nationalConvention: false,
    recruitmentDay: false,
  },
];

describe("CorporationTable", () => {
  it("matches snapshot when populated with corporations", () => {
    const { container } = render(
      <CorporationTable corporations={mockCorporations} refetch={noop} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a row per corporation and the correct true/false icons", () => {
    const { container } = render(
      <CorporationTable corporations={mockCorporations} refetch={noop} />
    );

    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.getByText("Beta Inc")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(
      mockCorporations.length + 1
    ); // +1 header row

    // Acme has 3 "true" fields (shpeSponsor, fallBBQ, nationalConvention),
    // Beta has none — 3 checks total across both rows.
    expect(container.querySelectorAll(".request-true")).toHaveLength(3);
    expect(container.querySelectorAll(".request-false")).toHaveLength(9);
  });

  it("matches snapshot and shows the empty-state placeholder when there are no corporations", () => {
    const { container } = render(
      <CorporationTable corporations={[]} refetch={noop} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the empty-state message when there are no corporations", () => {
    render(<CorporationTable corporations={[]} refetch={noop} />);

    expect(
      screen.getByText(/there are currently no corporations available/i)
    ).toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });
});
