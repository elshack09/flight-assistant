import React, { Component } from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Airlinenavbar from "./components/Airlinenavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Servicesorder from "./components/Servicesorder";
import Customer from "./components/Customer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Airlinenavbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <div className="container">
              <Route exact path="/order" component={Servicesorder} />
            </div>
            <div className="container">
              <Route exact path="/customer/:id" component={Customer} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
