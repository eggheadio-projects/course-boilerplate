import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

class App extends Component {
  state = {
    showing: true,
  };

  toggle = () => {
    this.setState(state => ({
      showing: !state.showing,
    }));
  };

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.showing}
          timeout={500}
          classNames="fade"
          appear
          unmountOnExit
        >
          <div className="cookie-box">
            <p>Accept cookies?</p>
            <button onClick={this.toggle}>
              OK
            </button>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
