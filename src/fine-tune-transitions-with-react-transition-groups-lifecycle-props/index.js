import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import './index.css';

class App extends Component {
  state = {
    showBalloon: false,
    highlightedListItem: false,
  };

  toggle = () => {
    this.setState(state => ({
      showBalloon: !state.showBalloon,
    }));
  };

  toggleBg = () => {
    this.setState(state => ({
      highlightedListItem: !state.highlightedListItem,
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
            onEntered={this.toggleBg}
            onExit={this.toggleBg}
          >
            <div className="menu">
              <ul className="list">
                <li className="list-item">Home</li>
                <li
                  className={cx('list-item', {
                    'list-item--active': this.state
                      .highlightedListItem,
                  })}
                >
                  Profile
                </li>
                <li className="list-item">
                  Favorites
                </li>
                <li className="list-item">Sign out</li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default App;
