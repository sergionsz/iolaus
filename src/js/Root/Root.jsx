import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App/App';
import NotFound from '../Components/NotFound/NotFound';

class Root extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ App } />
        <Route path='*' component={ NotFound } />
      </Router>
    );
  }
}

export default Root;
