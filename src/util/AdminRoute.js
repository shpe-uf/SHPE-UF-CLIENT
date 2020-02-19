import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth";

function AdminRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={props =>
        (localStorage.getItem('permission') === 'admin') ? <Component {...props}/> : <Redirect to="/" />
      }
    />
  )
}

export default AdminRoute;