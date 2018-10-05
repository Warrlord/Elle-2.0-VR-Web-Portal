import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
//import Whoops404 from './components/Whoops404'

const routes = (
    <Router >
        <Route path="/" component={App} />
    </Router>
)

export default routes
