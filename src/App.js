import React, { Component } from 'react';
import './App.css';
// import TransitionAReactComponentWithCSSTransition from './transition-a-react-component-with-rtgs-csstransition';
// import Appear from './show-rtg-elements-with-an-initial-transition-with-the-appear-prop';
// import EnterExit from './disable-rtg-enter-andor-exit-transitions-using-the-enter-and-exit-props';
// import LifecycleProps from './fine-tune-transitions-with-react-transition-groups-lifecycle-props';
// import TransitionListWithReactTransitionGroup from './transition-items-within-a-list-with-react-transition-group';
// import ComponentProp from './choose-which-kind-of-element-renders-as-the-lesstransitiongreater-lesscsstransitiongreater-and-lesstransitiongroupgreater-container-element-with-the-component-prop';
// import ReactRouterTransition from './transition-between-pages-with-react-transition-group-and-react-router';
import TransitionAReactComponentWithTransition from './transition-a-react-component-with-rtgs-transition';
// import StyledComponentsExample from './use-react-transition-group-alongside-the-styled-components-library';

class App extends Component {
  render() {
    return (
      // <TransitionAReactComponentWithCSSTransition />
      // <Appear />
      // <EnterExit />
      // <LifecycleProps />
      // <TransitionListWithReactTransitionGroup />
      // <ComponentProp />
      // <ReactRouterTransition />
      <TransitionAReactComponentWithTransition />
      // <StyledComponentsExample />
    );
  }
}

export default App;
