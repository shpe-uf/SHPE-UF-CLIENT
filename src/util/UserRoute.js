import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function UserRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/" />
}

export default UserRoute;
