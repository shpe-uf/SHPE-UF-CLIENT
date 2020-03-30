import React from "react";
import { Route, Redirect } from "react-router-dom";
<<<<<<< HEAD

function AdminRoute({ component: Component, ...rest }) {
=======
import Home from "../pages/public/Home";
>>>>>>> 4b88d9eaa10a7ffb1c944cb06ca4123221daef1f

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