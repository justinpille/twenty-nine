import React, { Component } from 'react';
import findFifteens from '../scoring/findFifteens'
import findPairs from '../scoring/findPairs'
import checkFlush from '../scoring/checkFlush'


class Score extends Component {
  render() {

    let fifteensNum = findFifteens(this.props.cards).length
    let fifteensScore = fifteensNum * 2

    let pairsNum = findPairs(this.props.cards).length
    let pairsScore = pairsNum * 2

    let gotFlush = checkFlush(this.props.cards)

    return (
      <div className="score">
        <div className="score fifteens">
          Fifteens: {fifteensNum} x 2 = {fifteensScore}
        </div>
        <div className="score runs"></div>
        <div className="score pairs">
          Pairs: {pairsNum} x 2 = {pairsScore}
        </div>
        <div className="score flush">
          {gotFlush ? 'got flush' : 'did not get flush'}
        </div>
      </div>
    );
  }
}


export default Score;
