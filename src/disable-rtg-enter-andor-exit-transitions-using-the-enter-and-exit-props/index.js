import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

class App extends Component {
  state = {
    showing: false,
  };

  toggle = () => {
    this.setState(state => ({
      showing: !state.showing,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          Toggle Text
        </button>
        <CSSTransition
          in={this.state.showing}
          timeout={500}
          classNames="fade"
          unmountOnExit
          enter={false}
        >
          <div>Bert was here</div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
