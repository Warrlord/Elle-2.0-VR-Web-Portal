import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Template from './pages/Template';
import Groups from './pages/Groups';
import Decks from './pages/Decks';
import Profile from './pages/Profile';
import Sessions from './pages/Sessions';
import Login from './pages/Login'
import Logout from './pages/Logout'
import Signup from './pages/Signup';
import UserList from './pages/UserList';
import AuthUser from './components/Auth/AuthUser';
import AuthAdmin from './components/Auth/AuthAdmin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      LoggedIn: true,
      permission: 0,
    };
  }

  render() {
    return (
        <Router>
        <div>
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <AuthUser>
              <Route path="/" component={Template} />
              <Route path="/groups" component={Groups} />
              <Route path="/decks" component={Decks} />
              <Route path="/profile" component={Profile} />
              <Route path="/sessions" component={Sessions} />
              <AuthAdmin>
                <Route path="/userlist" component={UserList} />
              </AuthAdmin>
            </AuthUser>
          </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
