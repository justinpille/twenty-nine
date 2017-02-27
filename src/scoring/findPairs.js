import sets from './sets'


let pairSets = sets[2]

export default
cards =>
  pairSets.filter(set =>
    cards[set[0]].name === cards[set[1]].name)
