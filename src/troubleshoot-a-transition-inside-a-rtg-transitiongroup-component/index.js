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
          Toggle Image
        </button>
        <CSSTransition
          in={this.state.showing}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <img
              src="https://placeimg.com/200/200/any"
              alt=""
            />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
