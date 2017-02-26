import React, { Component } from 'react';


class Hand extends Component {
  render() {
    return (
      <div className="hand">
        {
          this.props.cards.map((card, i) => {
            return (
              <div
                key={i}
                className="card self"
              >
                <div className="card name">{card.name}</div>
                <div className="card suit">{card.suit}</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default Hand;
