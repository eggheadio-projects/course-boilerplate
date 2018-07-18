import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

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
    const timeout = 250;

    const defaultStyles = {
      opacity: 0,
      transition: `opacity ${timeout}ms`,
    };

    const transitionStyles = {
      entering: {
        opacity: 1,
      },
      entered: {
        opacity: 1,
      },
    };

    return (
      <div>
        <Transition
          timeout={timeout}
          in={this.state.showing}
        >
          {state => (
            <div
              style={{
                ...defaultStyles,
                ...transitionStyles[state],
              }}
            >
              {state}
            </div>
          )}
        </Transition>
        <button onClick={this.toggle}>
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
