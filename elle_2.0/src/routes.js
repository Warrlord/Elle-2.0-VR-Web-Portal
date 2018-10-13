import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom'
import App from './App'


const routes = (
    <Router >
        <Route path="/" component={App} />
    </Router>
)

export default routes
