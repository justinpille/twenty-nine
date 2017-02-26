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
                <img src={card.img} alt=""/>
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default Hand;
