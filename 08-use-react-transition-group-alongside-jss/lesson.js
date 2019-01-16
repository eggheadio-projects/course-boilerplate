import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import styles from './styles';
import injectSheet from 'react-jss';

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
        <CSSTransition
          in={this.state.showBalloon}
          timeout={350}
          unmountOnExit
          classNames={{
            enter: classes.balloonEnter,
            enterActive: classes.balloonEnterActive,
            exit: classes.balloonExit,
            exitActive: classes.balloonExitActive,
          }}
        >
          {status => (
            <div className={classes.menu}>
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
        </CSSTransition>
      </div>
    );
  }
}

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
