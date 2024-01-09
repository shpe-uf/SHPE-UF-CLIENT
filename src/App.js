import React from "react";
import { Navigate, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { MediaContextProvider } from "./Media"

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import UserRoute from "./util/UserRoute";
import AdminRoute from "./util/AdminRoute";

import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import RegisterAlumni from "./pages/public/RegisterAlumni";
import About from "./pages/public/About";
import Alumni from "./pages/public/Alumni";
import EBoard from "./pages/public/EBoard";
import DevTeam from "./pages/public/DevTeam";
import ShpeJr from "./pages/public/ShpeJr";
import Sponsors from "./pages/public/Sponsors";
import ContactUs from "./pages/public/ContactUs";
import ResetPassword from "./pages/public/ResetPassword";
import ForgotPassword from "./pages/public/ForgotPassword";
import Confirm from "./pages/public/Confirm";
import MyCalendar from "./pages/public/MyCalendar";
import Resources from "./pages/public/Resources";
import Admin from "./pages/Admin";
import Points from "./pages/Points";
import Profile from "./pages/Profile";
import CorporateDatabase from "./pages/CorporateDatabase";
import Archives from "./pages/Archives";
import Events from "./pages/Events";
import Tasks from "./pages/Tasks";
import Members from "./pages/Members";
import Requests from "./pages/Requests";
import Statistics from "./pages/Statistics";
import Corporations from "./pages/Corporations";
import AlumniDirectory from "./pages/AlumniDirectory";
import ReimbursementRequest from "./pages/ReimbursementRequest";
import Reimbursements from "./pages/Reimbursements";
import ShpeitoNetwork from "./pages/ShpeitoNetwork";
import RentalAdmin from "./pages/RentalAdmin";
import ShpeRentals from "./pages/ShpeRentals";
import MentorSHPE from "./pages/MentorShpe";
import { jwtDecode } from "jwt-decode";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import AdminResources from "./pages/AdminResources";

function App() {
  var decodedToken = [];

  if (localStorage.getItem("jwtToken")) {
    decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
  }

  var { data } = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: decodedToken.id
    }
  });

  var permission = "";

  if (data && data.getUser)
  {
    permission = data.getUser.permission;
  }

  return (
    <AuthProvider>
      <MediaContextProvider>  
        <Router>
          <div style={{minHeight: "calc(100vh - 66px"}}>
          <MenuBar permission={permission}/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login"
              element={
                <AuthRoute>
                  <Login/>
                </AuthRoute>}
            />
            <Route exact path="/register"
              element={
                <AuthRoute>
                  <Register/>
                </AuthRoute>}
            />
            <Route exact path="/register/alumni" element={<RegisterAlumni/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/alumni" element={<Alumni/>} />
            <Route exact path="/eboard" element={<EBoard/>} />
            <Route exact path="/devteam" element={<DevTeam/>} />
            <Route exact path="/shpejr" element={<ShpeJr/>} />
            <Route exact path="/sponsors" element={<Sponsors/>} />
            <Route exact path="/contactus" element={<ContactUs/>} />
            <Route exact path="/calendar" element={<MyCalendar/>} />
            <Route exact path="/resources" element={<Resources/>}/>
            <Route exact path="/corporations"
              element={
                <UserRoute>
                  <Corporations/>
                </UserRoute>}
            />
            <Route exact path="/reset/:token" element={<ResetPassword/>} />
            <Route exact path="/forgot" element={<ForgotPassword/>} />
            <Route exact path="/confirm/:id" element={<Confirm/>} />
            <Route exact
              path="/profile"
              element={
                <UserRoute>
                  <Profile/>
                </UserRoute>}
            />
            <Route exact path="/points"
              element={
                <UserRoute>
                  <Points/>
                </UserRoute>}
            />
            <Route exact path="/alumnidirectory"
              element={
              <UserRoute>
                <AlumniDirectory/>
              </UserRoute>}
            />
            <Route exact path="/reimbursementrequest"
              element={
                <UserRoute
                  element={<ReimbursementRequest/>} 
                  user={decodedToken}
                />}
            />
            <Route exact path="/shpeitonetwork"
              element={
                <UserRoute>
                  <ShpeitoNetwork/>
                </UserRoute>}
            />
            <Route exact path="/mentorshpe"
              element={
              <UserRoute>
                <MentorSHPE/>
              </UserRoute>}
            />
            <Route exact path="/shperentals"
              element={
                <UserRoute>
                  <ShpeRentals/>
                </UserRoute>}
            />
            <Route exact path="/admin"
              element={
                <AdminRoute security="admin" permission={permission}>
                  <Admin permission={permission}/>
                </AdminRoute>}
            />
            <Route exact path="/admin/events" 
              element={
                <AdminRoute
                  permission={permission}
                  security="events">
                    <Events/>
                </AdminRoute>}
            />
            <Route exact path="/admin/tasks"
              element={
                <AdminRoute
                  permission={permission}
                  security="tasks"
                >
                  <Tasks/>
                </AdminRoute>}
            />
            <Route exact path="/admin/admin-resources"
              element={
                <AdminRoute
                  permission={permission}
                  security="adminresources"
                >
                  <AdminResources/>
                </AdminRoute>}
            />
            <Route exact path="/admin/members"
              element={
                <AdminRoute
                  permission={permission}
                  security="members"
                >
                  <Members/>
                </AdminRoute>}
            />
            <Route exact path="/admin/requests"
              element={
                <AdminRoute
                  permission={permission}
                  security="requests"
                >
                  <Requests/>
                </AdminRoute>}
            />
            <Route exact path="/admin/statistics"
              element={
                <AdminRoute 
                  permission={permission}
                  security="statistics"
                >
                  <Statistics/>
                </AdminRoute>}
            />
            <Route exact path="/admin/archives"
              element={
                <AdminRoute
                  permission={permission}>
                  <Archives/>
                </AdminRoute>}
            />
            <Route exact path="/admin/corporatedatabase"
              element={
                <AdminRoute
                  permission={permission}
                  security="corporatedatabase">
                    <CorporateDatabase/>
                </AdminRoute>}
            />
            <Route exact path="/admin/reimbursements"
              element={
                <AdminRoute
                  permission={permission}
                  security="reimbursements">
                    <Reimbursements/>
                </AdminRoute>}
            />
            <Route exact path="/admin/receipts"
              element={
                <AdminRoute
                permission={permission}
                security="rental">
                  <RentalAdmin/>
                </AdminRoute>}
            />
          </Routes>
          </div>
          <Footer />
        </Router>
      </MediaContextProvider>
    </AuthProvider>
  );
}

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      permission
    }
  }
`;

export default App;