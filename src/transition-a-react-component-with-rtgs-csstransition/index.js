import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './index.css';

class App extends Component {
  state = {
    showBalloon: false,
  };
  toggle = () => {
    this.setState(state => ({
      showBalloon: !state.showBalloon,
    }));
  };

  render() {
    return (
      <div>
        <div className="container">
          <button
            className={cx('toggler', {
              'toggler--active': this.state
                .showBalloon,
            })}
            onClick={this.toggle}
          >
            Menu
          </button>
          <CSSTransition
            in={this.state.showBalloon}
            timeout={350}
            classNames="balloon"
            unmountOnExit
          >
            <div className="card">
              <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Favorites</li>
                <li>Sign out</li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default App;
