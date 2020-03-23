import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth";
import jwtDecode from "jwt-decode";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

function AdminRoute({ component: Component, permission: permission, ...rest }) {
  console.log(permission);
  return (
    <Route
      {...rest}
      render={props =>
        (permission === 'admin') ? <Component {...props}/> : <Redirect to="/" />
      }
    />
  )
}

export default AdminRoute;