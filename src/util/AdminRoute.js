import React from "react";
import { Route, Navigate } from "react-router-dom";

function AdminRoute({permission, security, children }) {
  const authorized = permission.includes('super') || permission.includes(security);
  return authorized ? children : <Navigate to ="/"/>;
}

export default AdminRoute;