import React, { Component } from 'react';
import findFifteens from '../scoring/findFifteens'


class Score extends Component {
  render() {
    console.log(findFifteens(this.props.cards))
    return (
      <div className="score">
        <div className="score fifteens">
          {findFifteens(this.props.cards).length * 2}
        </div>
        <div className="score runs"></div>
        <div className="score pairs"></div>
        <div className="score flush"></div>
      </div>
    );
  }
}


export default Score;
