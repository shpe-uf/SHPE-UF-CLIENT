import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useLazyQuery } from "@apollo/client";
import { FETCH_TOP_USERS_QUERY } from "../util/graphql";

function getCurrentSemester() {
  const month = new Date().getMonth() + 1;

  if (month >= 1 && month <= 4) return "Spring Semester";
  if (month >= 8 && month <= 12) return "Fall Semester";
  return "Summer Semester";
}

function TopUsersButton() {
  const [loading, setLoading] = useState(false);

  const [exportTopUsersCSV] = useLazyQuery(FETCH_TOP_USERS_QUERY, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setLoading(false);
      const base64 = data.getTopUsers;

      if (!base64) {
        return;
      }

      const csv = atob(base64);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);

      const semester = getCurrentSemester().replace(/\s+/g, "-");
      const year = new Date().getFullYear();

      const link = document.createElement("a");
      link.href = url;
      link.download = `TopUsers-${semester}-${year}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    onError: (err) => {
      setLoading(false);
    },
  });

  const handleExport = () => {
    setLoading(true);
    const semester = getCurrentSemester();
    const year = new Date().getFullYear();

    exportTopUsersCSV({
      variables: { semester, year },
    });
  };

  return (
    <Button onClick={handleExport} loading={loading}>
      Export Top Members
    </Button>
  );
}

export default TopUsersButton;
