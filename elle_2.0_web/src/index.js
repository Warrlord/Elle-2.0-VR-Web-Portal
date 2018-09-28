import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, hashHistory } from 'react-router'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
    <Route path="*" component={Whoops404}/>
  </Router>
  <App />, document.getElementById('root')

);
registerServiceWorker();
