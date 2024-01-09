import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      component={props =>
        user ? <Navigate to="/" /> : <Component {...props}/>
      }
    />
  )
}

export default AuthRoute;
