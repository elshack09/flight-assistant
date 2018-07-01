import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage';
import './App.css';
import Emergencymodal from './components/Airlinenavbar';






class App extends Component {
  render() {
    return (
      <div className="App">
      <Emergencymodal/>
       <Homepage />
       
       
      
      </div>
    );
  }
}

export default App;
