import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Airlinenavbar from "./components/Airlinenavbar";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Airlinenavbar />
        <Home />
      </div>
    );
  }
}

export default App;
