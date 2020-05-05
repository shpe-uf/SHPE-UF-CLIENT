import React from "react";
import { Redirect, BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
import Sponsors from "./pages/public/Sponsors";
import ResetPassword from "./pages/public/ResetPassword";
import ForgotPassword from "./pages/public/ForgotPassword";
import Confirm from "./pages/public/Confirm";
import Admin from "./pages/Admin";
import Points from "./pages/Points";
import Profile from "./pages/Profile";
import CorporateDatabase from "./pages/CorporateDatabase";
import Events from "./pages/Events";
import Tasks from "./pages/Tasks";
import Members from "./pages/Members";
import Requests from "./pages/Requests";
import Statistics from "./pages/Statistics";
import Corporations from "./pages/Corporations";
import AlumniDirectory from "./pages/AlumniDirectory";
import ClassSharing from "./pages/ClassSharing";
import jwtDecode from "jwt-decode";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
      <Router>
        <MenuBar permission = {permission}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/register/alumni" component={RegisterAlumni} />
          <Route exact path="/about" component={About} />
          <Route exact path="/alumni" component={Alumni} />
          <Route exact path="/eboard" component={EBoard} />
          <Route exact path="/devteam" component={DevTeam} />
          <Route exact path="/sponsors" component={Sponsors} />
          <UserRoute exact path="/corporations" component={Corporations} />
          <Route exact path="/reset/:token" component={ResetPassword} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <Route exact path="/confirm/:id" component={Confirm} />
          <UserRoute exact path="/profile" component={Profile} />
          <UserRoute exact path="/points" component={Points} />
          <UserRoute exact path="/alumnidirectory" component={AlumniDirectory} />
          <UserRoute exact path="/classSharing" component={ClassSharing} />
          <AdminRoute exact path="/admin" component={() => <Admin permission={permission}/>} permission={permission} security="admin"/>
          <AdminRoute exact path="/admin/events" component={Events} permission={permission} security="events"/>
          <AdminRoute exact path="/admin/tasks" component={Tasks} permission={permission} security="tasks"/>
          <AdminRoute exact path="/admin/members" component={Members} permission={permission} security="members"/>
          <AdminRoute exact path="/admin/requests" component={Requests} permission={permission} security="requests"/>
          <AdminRoute exact path="/admin/statistics" component={Statistics} permission={permission} security="statistics"/>
          <AdminRoute exact path="/admin/corporatedatabase" component={CorporateDatabase} permission={permission} security="corporatedatabase"/>
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
        <Footer />
      </Router>
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
