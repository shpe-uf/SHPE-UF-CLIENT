import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function UserRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      component={props =>
        user ? <Component {...props}/> : <Navigate to="/" />
      }
    />
  )
}

export default UserRoute;
