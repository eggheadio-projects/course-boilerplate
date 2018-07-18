import React, { Component } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './index.css';
import uuidv1 from 'uuid/v1';

class App extends Component {
  state = {
    numbers: [
      {
        id: uuidv1(),
        number: 5,
      },
      {
        id: uuidv1(),
        number: 53,
      },
      {
        id: uuidv1(),
        number: 51,
      },
      {
        id: uuidv1(),
        number: 535,
      },
      {
        id: uuidv1(),
        number: 52332,
      },
    ],
  };

  addCell = () => {
    this.setState(state => ({
      numbers: [
        ...state.numbers,
        {
          id: new Date().getUTCMilliseconds(),
          number: Math.floor(
            Math.random() * Math.floor(20)
          ),
        },
      ],
    }));
  };

  removeNumber = id => {
    this.setState(state => ({
      numbers: state.numbers.filter(
        item => item.id !== id
      ),
    }));
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.addCell}>
          Add Row
        </button>
        <TransitionGroup>
          {this.state.numbers.map(
            ({ id, number }) => (
              <CSSTransition
                timeout={500}
                classNames="fade"
                key={id}
              >
                <div className="card">
                  {number}
                  <button
                    onClick={() =>
                      this.removeNumber(id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </CSSTransition>
            )
          )}
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
