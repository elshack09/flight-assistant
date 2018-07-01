import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Airlinenavbar from "./components/Airlinenavbar";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Airlinenavbar />
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
