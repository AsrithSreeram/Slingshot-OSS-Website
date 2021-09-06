import React from "react";
import LandingPage from "./components/LandingPage";
import ProjectsPage from './components/ProjectsPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

const App = () => {


  return (
    <Router>
    <Switch>

          <Route exact path="/">
          <LandingPage />
          </Route>

          <Route path="/projects">
          <ProjectsPage />
          </Route>
          
      </Switch>
      </Router>
  );
};


export default App;
