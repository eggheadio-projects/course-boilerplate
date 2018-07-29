import React, { Component } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import cx from 'classnames';
import uuidv1 from 'uuid/v1';
import './index.css';

class App extends Component {
  items = [
    {
      name: 'Potato',
      id: uuidv1(),
    },
    {
      name: 'Carrot',
      id: uuidv1(),
    },
    {
      name: 'Pepper',
      id: uuidv1(),
    },
    {
      name: 'Eggplant',
      id: uuidv1(),
    },
    {
      name: 'Onion',
      id: uuidv1(),
    },
    {
      name: 'Garlic',
      id: uuidv1(),
    },
  ];

  state = {
    favorites: [],
  };

  toggleInFavorites = id => {
    let favorites;
    if (
      this.state.favorites.find(
        favorite => favorite.id === id
      )
    ) {
      // Item is already in favorites, remove it.
      favorites = this.state.favorites.filter(
        favorite => favorite.id !== id
      );
    } else {
      // Item is not in favorites, add it.
      favorites = [
        ...this.state.favorites,
        this.items.find(item => id === item.id),
      ];
    }
    this.setState(state => ({
      favorites,
    }));
  };

  render() {
    return (
      <div className="container">
        <ul className="ingredients">
          {this.items.map(({ id, name }) => (
            <li
              className="ingredient"
              onClick={() =>
                this.toggleInFavorites(id)
              }
            >
              {name}
              <span className="star">
                {this.state.favorites.find(
                  favorite => favorite.id === id
                )
                  ? '★'
                  : '☆'}
              </span>
            </li>
          ))}
        </ul>
        <TransitionGroup className="favorites">
          <p>My Favorites:</p>
          {this.state.favorites.map(({ id, name }) => (
            <CSSTransition
              timeout={500}
              classNames="fade"
              key={id}
            >
              <div className="favorite">{name}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
