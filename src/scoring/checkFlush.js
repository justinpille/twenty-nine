export default 
cards => cards
  .map(card => card.suit === cards[0].suit)
  .reduce((acc, val) => acc && val)
