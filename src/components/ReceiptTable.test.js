import React from "react";
import { screen } from "@testing-library/react";
import { renderWithMocks as render } from "../test-utils";
import ReceiptTable from "./ReceiptTable";

// ReceiptTable owns several useMutation calls itself, so it needs an
// ApolloProvider in the tree even though these tests never fire them.

const mockReceipts = [
  {
    id: "1",
    username: "vvaldez",
    item: "Soldering Iron",
    quantity: 1,
    dateCheckedOut: '"2026-01-10"',
    datePickedUp: null,
    dateClosed: null,
  },
  {
    id: "2",
    username: "achen",
    item: "Multimeter",
    quantity: 2,
    dateCheckedOut: '"2026-01-12"',
    datePickedUp: null,
    dateClosed: null,
  },
];

describe("ReceiptTable", () => {
  it("matches snapshot when populated with receipts", () => {
    const { container } = render(
      <ReceiptTable receipts={mockReceipts} type="checked" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a row per receipt with the expected cell data", () => {
    render(<ReceiptTable receipts={mockReceipts} type="checked" />);

    expect(screen.getByText("vvaldez")).toBeInTheDocument();
    expect(screen.getByText("Soldering Iron")).toBeInTheDocument();
    expect(screen.getByText("achen")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(mockReceipts.length + 1); // +1 header row
  });

  it("renders the type-specific action column for the given tab", () => {
    render(<ReceiptTable receipts={mockReceipts} type="picked" />);

    expect(
      screen.getByRole("columnheader", { name: "Undo PickUp" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Returned" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("columnheader", { name: "Picked Up" })
    ).not.toBeInTheDocument();
  });

  it("matches snapshot and renders no rows when there are no receipts", () => {
    const { container } = render(
      <ReceiptTable receipts={[]} type="checked" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders only the header row when there are no receipts", () => {
    render(<ReceiptTable receipts={[]} type="checked" />);

    expect(screen.getAllByRole("row")).toHaveLength(1); // header only
  });
});
