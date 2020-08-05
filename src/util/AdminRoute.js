import React from "react";
import { Route, Redirect } from "react-router-dom";

function AdminRoute({ component: Component, permission, security, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        <>
        {(permission.includes('super') || permission.includes(security)) && <Component {...props}/>}
        {(permission !== "" && (!permission.includes('super') && !permission.includes(security))) && <Redirect to="/"/>}
        </>
      }
    />
  )
}

export default AdminRoute;