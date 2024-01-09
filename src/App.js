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
              component={
                <AuthRoute>
                  <Login/>
                </AuthRoute>}
            />
            <Route exact path="/register"
              component={
                <AuthRoute>
                  <Register/>
                </AuthRoute>}
            />
            <Route exact path="/register/alumni" component={RegisterAlumni} />
            <Route exact path="/about" component={About} />
            <Route exact path="/alumni" component={Alumni} />
            <Route exact path="/eboard" component={EBoard} />
            <Route exact path="/devteam" component={DevTeam} />
            <Route exact path="/shpejr" component={ShpeJr} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/calendar" component={MyCalendar} />
            <Route exact path="/resources" component={Resources}/>
            <Route exact path="/corporations"
              component={
                <UserRoute>
                  <Corporations/>
                </UserRoute>}
            />
            <Route exact path="/reset/:token" component={ResetPassword} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route exact path="/confirm/:id" component={Confirm} />
            <Route exact
              path="/profile"
              component={
                <UserRoute>
                  <Profile/>
                </UserRoute>}
            />
            <Route exact path="/points"
              component={
                <UserRoute>
                  <Points/>
                </UserRoute>}
            />
            <Route exact path="/alumnidirectory"
              component={
              <UserRoute>
                <AlumniDirectory/>
              </UserRoute>}
            />
            <Route exact path="/reimbursementrequest"
              component={
                <UserRoute
                  element={<ReimbursementRequest/>} 
                  user={decodedToken}
                />}
            />
            <Route exact path="/shpeitonetwork"
              component={
                <UserRoute>
                  <ShpeitoNetwork/>
                </UserRoute>}
            />
            <Route exact path="/mentorshpe"
              component={
              <UserRoute>
                <MentorSHPE/>
              </UserRoute>}
            />
            <Route exact path="/shperentals"
              component={
                <UserRoute>
                  <ShpeRentals/>
                </UserRoute>}
            />
            <Route exact path="/admin"
              component={
                <AdminRoute
                  component={<Admin permission={permission}/>}
                  security="admin"/>}
            />
            <Route exact path="/admin/events" 
              component={
                <AdminRoute
                  component={<Events/>}
                  permission={permission}
                  security="events"/>}
            />
            <Route exact path="/admin/tasks"
              component={
                <AdminRoute
                  component={<Tasks/>}
                  permission={permission}
                  security="tasks"
                />}
            />
            <Route exact path="/admin/admin-resources"
              component={
                <AdminRoute
                  component={<AdminResources/>}
                  permission={permission}
                  security="adminresources"
                />}
            />
            <Route exact path="/admin/members"
              component={
                <AdminRoute
                  component={<Members/>}
                  permission={permission}
                  security="members"
                />}
            />
            <Route exact path="/admin/requests"
              component={
              <AdminRoute
                component={<Requests/>}
                permission={permission}
                security="requests"
              />}
            />
            <Route exact path="/admin/statistics"
              component={
                <AdminRoute 
                  component={<Statistics/>}
                  permission={permission}
                  security="statistics"/>}
            />
            <Route exact path="/admin/archives"
              component={
                <AdminRoute
                  component={<Archives/>}
                  permission={permission}/>}
            />
            <Route exact path="/admin/corporatedatabase"
              component={
                <AdminRoute
                  component={<CorporateDatabase/>}
                  permission={permission}
                  security="corporatedatabase"/>}
            />
            <Route exact path="/admin/reimbursements"
              component={
                <AdminRoute
                component={<Reimbursements/>}
                permission={permission}
                security="reimbursements"/>}
            />
            <Route exact path="/admin/receipts"
              component={
                <AdminRoute
                component={<RentalAdmin/>}
                permission={permission}
                security="rental"/>}
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