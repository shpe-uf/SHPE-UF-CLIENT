import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/public/Home";

function AdminRoute({ component: Component, permission: permission, ...rest }) {
  console.log(permission);
  return (
    <Route
      {...rest}
      render={props =>
        <>
        {(permission === 'admin') ? <Component {...props}/> : <Route component={Home} />}
        {(permission === 'user') && <Redirect to="/"/>}
        </>
      }
    />
  )
}

export default AdminRoute;
