let names = [
  ['ace', 'a'],
  ['two', '2'],
  ['three', '3'],
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9'],
  ['ten', '10'],
  ['jack', 'j'],
  ['queen', 'q'],
  ['king', 'k']
]

let suits = [
  ['spades', 's'],
  ['clubs', 'c'],
  ['hearts', 'h'],
  ['diamonds', 'd']
]

let makeCard = (index) => {
  let nameIndex = index % names.length
  let suitIndex = index % suits.length
  let value = nameIndex < 10 ? nameIndex + 1 : 10
  let name = names[nameIndex][0]
  let suit = suits[suitIndex][0]
  let code = names[nameIndex][1] + suits[suitIndex][1]
  let img = process.env.PUBLIC_URL + `/img/${code}.svg`
  return {
    index,
    nameIndex,
    suitIndex,
    value,
    name,
  	suit,
  	code,
    img,
  }
}


let fiftyThings = Array.from(Array(50))
let deck = fiftyThings.map((val, i) => makeCard(i))


export default deck
