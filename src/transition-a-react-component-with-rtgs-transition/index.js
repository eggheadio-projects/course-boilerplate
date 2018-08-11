import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import cx from 'classnames';
import styles from './styles';
import injectSheet from 'react-jss';
console.log('styles: ', styles);

class App extends Component {
  state = {
    showBalloon: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      showBalloon: !prevState.showBalloon,
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <button
          className={cx(classes.toggler, {
            [classes.togglerActive]: this.state
              .showBalloon,
          })}
          onClick={this.toggle}
        >
          Menu
        </button>
        <Transition
          in={this.state.showBalloon}
          timeout={350}
          unmountOnExit
        >
          {status => (
            <div
              className={cx(
                classes.balloon,
                classes[`balloon-${status}`],
                classes.menu
              )}
            >
              {console.log('status: ', status)}
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  Home
                </li>
                <li className={classes.listItem}>
                  Profile
                </li>
                <li className={classes.listItem}>
                  Favorites
                </li>
                <li className={classes.listItem}>
                  Sign out
                </li>
              </ul>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
