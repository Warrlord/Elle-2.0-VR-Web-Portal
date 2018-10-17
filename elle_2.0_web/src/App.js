import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Home from './pages/Home'
import Groups from './pages/Groups'
import Decks from './pages/Decks'
import Profile from './pages/Profile'
import Sessions from './pages/Sessions'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route path="/" component={Home} />
            <Route path="/Groups" component={Groups} />
            <Route path="/Decks" component={Decks} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Sessions" component={Sessions} />
            <Route path="/Login" component={Login} />
          </div>
        </Router>
    );
  }
}

export default App;
