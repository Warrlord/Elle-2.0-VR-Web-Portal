import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Template from './pages/Template'
import Groups from './pages/Groups'
import Decks from './pages/Decks'
import Profile from './pages/Profile'
import Sessions from './pages/Sessions'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'

class App extends Component {
  constructor(){
    super();
    this.state = {
      LoggedIn: true,
      permission: 0,
    };
  }
  render() {
    return (
        <Router>
          <div className="RouterControl" >
            <Route path="/" component={Template} />
            <Route path="/Groups" component={Groups} />
            <Route path="/Decks" component={Decks} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Sessions" component={Sessions} />
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/Signup" component={Signup} />
          </div>
        </Router>
    );
  }
}

export default App;
