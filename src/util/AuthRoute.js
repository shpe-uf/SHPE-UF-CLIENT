import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function AuthRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/"/> : children;
}

export default AuthRoute;
