import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Shifts from './components/Shifts'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shifts" component ={Shifts} />
        </Switch>
      </Router>
        
        
      </div>
    );
  }
}

export default App;
