import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import cx from 'classnames';
import Home from './Home';
import Profile from './Profile';
import Favorites from './Favorites';
import '../index.css';

class App extends Component {
  state = {
    showBalloon: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      showBalloon: !prevState.showBalloon,
    }));
  };

  componentWillReceiveProps(nextProps) {
    // Hide menu on route change.
    if (nextProps.location !== this.props.location) {
      this.setState({ showBalloon: false });
    }
  }

  render() {
    const { location } = this.props;
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
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="list-item">
                <Link to="/favorites">Favorites</Link>
              </li>
              <li className="list-item">Sign out</li>
            </ul>
          </div>
        </CSSTransition>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="swipe"
            timeout={500}
          >
            <div className="swipe-container">
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  component={Home}
                />
                <Route
                  exact
                  path="/profile"
                  component={Profile}
                />
                <Route
                  exact
                  path="/favorites"
                  component={Favorites}
                />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
