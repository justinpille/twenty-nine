let names = [
  ['Ace', 'a'],
  ['Two', '2'],
  ['Three', '3'],
  ['Four', '4'],
  ['Five', '5'],
  ['Six', '6'],
  ['Seven', '7'],
  ['Eight', '8'],
  ['Nine', '9'],
  ['Ten', '10'],
  ['Jack', 'j'],
  ['Queen', 'q'],
  ['King', 'k']
]

let suits = [
  ['Spades', 's'],
  ['Clubs', 'c'],
  ['Hearts', 'h'],
  ['Diamonds', 'd']
]

let makeCard = (index) => {
  let nameIndex = index % names.length
  let suitIndex = index % suits.length
  return {
    index,
    nameIndex,
    suitIndex,
    value: nameIndex < 10 ? nameIndex + 1 : 10,
    name: names[nameIndex][0],
  	suit: suits[suitIndex][0],
  	code: names[nameIndex][1] + suits[suitIndex][1],
  }
}


let fiftyThings = Array.from(Array(50))
let deck = fiftyThings.map((val, i) => makeCard(i))


export default deck
