import sets from './sets'


export default
(cards) => {
  let fifteens = []
  for (let i = 2; i <= 5; i++) {
    for (let j = 0; j < sets[i].length; j++) {
      let sum = 0
      for (let k = 0; k < sets[i][j].length; k++) {
        sum += cards[sets[i][j][k]].value
        if ((k === sets[i][j].length - 1) && sum === 15) {
          fifteens.push(sets[i][j]);
        }
      }
    }
  }
  return fifteens
}
