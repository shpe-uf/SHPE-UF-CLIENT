import React from "react";
import Title from "../components/Title";
import ReceiptTable from "../components/ReceiptTable";
import { Container, Tab, Loader } from "semantic-ui-react";

import { FETCH_RECEIPTS_QUERY } from "../util/graphql";
import { useQuery } from "@apollo/react-hooks";

function RentalAdmin() {
  let receipts = [];
  let { data } = useQuery(FETCH_RECEIPTS_QUERY);
  if (data) {
    receipts = data.getReceipts;
  }

  return (
    <>
      <Title title="SHPE Rentals" adminPath={window.location.pathname} />
      <Container className="body">
        {receipts ? (
          <Tab
            panes={[
              {
                menuItem: "Checked Out",
                render: () => (
                  <Tab.Pane>
                    <ReceiptTable
                      receipts={receipts.filter(
                        (e) => !e.datePickedUp && !e.deleted
                      )}
                      type="checked"
                    />
                  </Tab.Pane>
                ),
              },
              {
                menuItem: "Picked Up",
                render: () => (
                  <Tab.Pane>
                    <ReceiptTable
                      receipts={receipts.filter(
                        (e) => e.datePickedUp && !e.dateClosed && !e.deleted
                      )}
                      type="picked"
                    />
                  </Tab.Pane>
                ),
              },
              {
                menuItem: "Returned",
                render: () => (
                  <Tab.Pane>
                    <ReceiptTable
                      receipts={receipts.filter(
                        (e) => e.dateClosed && !e.deleted
                      )}
                      type="returned"
                    />
                  </Tab.Pane>
                ),
              },
              {
                menuItem: "Deleted",
                render: () => (
                  <Tab.Pane>
                    <ReceiptTable
                      receipts={receipts.filter((e) => e.deleted)}
                      type="deleted"
                    />
                  </Tab.Pane>
                ),
              },
            ]}
          />
        ) : (
          <Loader active />
        )}
      </Container>
    </>
  );
}

export default RentalAdmin;
