import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './App';

class Base extends Component {
  render() {
    return (
      <Router>
        <Route component={App} />
      </Router>
    );
  }
}

export default Base;
