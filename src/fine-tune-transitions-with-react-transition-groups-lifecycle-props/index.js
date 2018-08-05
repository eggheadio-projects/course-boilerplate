import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './index.css';

class App extends Component {
  state = {
    showBalloon: false,
    highlightedMenuItem: false,
  };

  toggle = () => {
    this.setState(state => ({
      showBalloon: !state.showBalloon,
    }));
  };

  toggleHighlightedMenuItem = () => {
    this.setState(state => ({
      highlightedMenuItem: !state.highlightedMenuItem,
    }));
  };

  render() {
    return (
      <div className="container">
        <button
          className={cx('toggler', {
            'toggler--active': this.state.showBalloon,
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
          onEntered={this.toggleHighlightedMenuItem}
          onExit={this.toggleHighlightedMenuItem}
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li
                className={cx('list-item', {
                  'list-item--active': this.state
                    .highlightedMenuItem,
                })}
              >
                Profile
              </li>
              <li className="list-item">Favorites</li>
              <li className="list-item">Sign out</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
