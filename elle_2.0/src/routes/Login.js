import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom'

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/'}}
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return (<Redirect to= { from } />)
    }
    return(
      <div>
        <p>You must log in to continue at {from.pathname}</p>
        <button onClick={this.login}>Login</button>

      </div>
    )
  }
}
