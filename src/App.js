import React, { Component } from 'react';
import Hand from './views/Hand'
import Score from './views/Score'
import Deck from 'card-deck'
import deck from './deck/deck'


let myDeck = new Deck([...deck])

class App extends Component {

  state = {
    cards: []
  }

  componentWillMount() {
    this.deal()
  }

  deal = () => {
    if (myDeck.remaining() >= 5) {
      myDeck.shuffle()
      this.setState({
        cards: myDeck.draw(5)
      })
    } else {
      myDeck = new Deck([...deck])
      this.deal()
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Twenty Nine</h1>
        <button
          className="deal btn"
          onClick={this.deal}
        >
          Deal
        </button>
        <Hand
          cards={this.state.cards}
        />
        <Score
          cards={this.state.cards}
        />
      </div>
    );
  }
}

export default App;
