import React, { Component } from 'react';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';
import cx from 'classnames';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut iaculis, felis id convallis
        malesuada, felis lectus sagittis nisi,
        pellentesque dictum massa quam et neque.
        Suspendisse tincidunt ac lacus in hendrerit.
      </p>
      <p>
        Nunc vulputate in lorem rhoncus consequat.
        Mauris fermentum quis ex in malesuada. Cras
        congue elit quis rhoncus eleifend. Aenean purus
        orci, ultrices ac justo nec, vestibulum dapibus
        ipsum. Nunc sit amet finibus est. Duis ante
        elit, porta vel laoreet a, lobortis tincidunt
        tortor. Proin quis tellus porttitor, suscipit
        felis ac, semper augue.
      </p>
      <p>
        Sed tempor aliquam purus luctus convallis.
        Curabitur blandit ipsum nulla, at fermentum
        lacus tempor ac. Integer vitae risus id augue
        eleifend porttitor sit amet bibendum ipsum.
        Integer quis tincidunt nibh.
      </p>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <p>
        Nunc vulputate in lorem rhoncus consequat.
        Mauris fermentum quis ex in malesuada. Cras
        congue elit quis rhoncus eleifend. Aenean purus
        orci, ultrices ac justo nec, vestibulum dapibus
        ipsum. Nunc sit amet finibus est. Duis ante
        elit, porta vel laoreet a, lobortis tincidunt
        tortor. Proin quis tellus porttitor, suscipit
        felis ac, semper augue.
      </p>
      <p>
        Sed tempor aliquam purus luctus convallis.
        Curabitur blandit ipsum nulla, at fermentum
        lacus tempor ac. Integer vitae risus id augue
        eleifend porttitor sit amet bibendum ipsum.
        Integer quis tincidunt nibh.
      </p>
    </div>
  );
};

const Favorites = () => {
  return (
    <div>
      <h1>Favorites</h1>
      <p>
        Sed tempor aliquam purus luctus convallis.
        Curabitur blandit ipsum nulla, at fermentum
        lacus tempor ac. Integer vitae risus id augue
        eleifend porttitor sit amet bibendum ipsum.
        Integer quis tincidunt nibh.
      </p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router history>
        <Route component={Main} />
      </Router>
    );
  }
}

class Main extends Component {
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
