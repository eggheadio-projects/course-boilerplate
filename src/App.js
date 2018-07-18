import React, { Component } from 'react';
import './App.css';
// import TransitionAReactComponentWithTransition from './transition-a-react-component-with-rtgs-transition';
// import TransitionAReactComponentWithCSSTransition from './transition-a-react-component-with-rtgs-csstransition';
import TransitionListWithReactTransitionGroup from './transition-items-within-a-list-with-react-transition-group';

class App extends Component {
  render() {
    return (
      // <TransitionAReactComponentWithTransition />
      // <TransitionAReactComponentWithCSSTransition />
      <TransitionListWithReactTransitionGroup />
    );
  }
}

export default App;
