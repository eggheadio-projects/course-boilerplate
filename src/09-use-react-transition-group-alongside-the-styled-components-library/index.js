import React, { Component } from 'react';
import {
  Container,
  Toggler,
  List,
  ListItem,
  Menu,
} from './components';

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
    return (
      <Container>
        <Toggler
          active={this.state.showBalloon}
          onClick={this.toggle}
        >
          Menu
        </Toggler>
        <Menu
          in={this.state.showBalloon}
          timeout={350}
          unmountOnExit
        >
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Profile</ListItem>
            <ListItem>Favorites</ListItem>
            <ListItem>Sign out</ListItem>
          </List>
        </Menu>
      </Container>
    );
  }
}

export default App;
