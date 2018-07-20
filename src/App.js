import React, { Component } from 'react';
import './App.css';
// import TransitionAReactComponentWithTransition from './transition-a-react-component-with-rtgs-transition';
// import TransitionAReactComponentWithCSSTransition from './transition-a-react-component-with-rtgs-csstransition';
// import TransitionListWithReactTransitionGroup from './transition-items-within-a-list-with-react-transition-group';
import Appear from './show-rtg-elements-with-an-initial-transition-with-the-appear-prop';

class App extends Component {
  render() {
    return (
      // <TransitionAReactComponentWithTransition />
      // <TransitionAReactComponentWithCSSTransition />
      // <TransitionListWithReactTransitionGroup />
      <Appear />
    );
  }
}

export default App;
