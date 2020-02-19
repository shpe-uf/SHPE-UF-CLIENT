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

function App() {
  console.log(localStorage);
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
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
          <AdminRoute exact path="/admin" component={Admin} />
          <AdminRoute exact path="/admin/events" component={Events} />
          <UserRoute exact path="/admin/tasks" component={Tasks} />
          <AdminRoute exact path="/admin/members" component={Members} />
          <AdminRoute exact path="/admin/requests" component={Requests} />
          <AdminRoute exact path="/admin/statistics" component={Statistics} />
          <UserRoute exact path="/admin/corporatedatabase" component={CorporateDatabase} />
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
