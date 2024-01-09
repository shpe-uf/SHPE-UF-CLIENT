import React from "react";
import { Route, Navigate } from "react-router-dom";

function AdminRoute({ component: Component, permission, security, ...rest }) {
  return (
    <Route
      {...rest}
      component={props =>
        <>
        {(permission.includes('super') || permission.includes(security)) && <Component {...props}/>}
        {(permission !== "" && (!permission.includes('super') && !permission.includes(security))) && <Navigate to="/"/>}
        </>
      }
    />
  )
}

export default AdminRoute;