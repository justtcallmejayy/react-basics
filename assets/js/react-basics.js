// StAuth10244: I Jay Choksi, 000887533 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

// Constants for suits and values
const suits = ["♥", "♦", "♣", "♠"]; // Hearts, Diamonds, Clubs, Spades icons copied from requirments.
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
]; // Ace, 2-10, Jack, Queen, King all the cards values.

// We can generate a class to create card object of 52 cards. Later a new deck can be created by creating an object of this class.
//Then we can shuffle the deck and draw a card from the deck.. or create a new deck and shuffle it and draw a card.
const generateDeck = () => {
  const deck = [];
  let id = 1;
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ id: id++, suit, value }); // Push the card object to the deck array.
    }
  }
  return deck;
};
const shuffleArray = (array) => {
  const newArr = array.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Randomly shuffle the cards.
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  } // Return the array for the shuffled deck.
  return newArr;
};

const Card = ({ card, onClick, isSelected }) => (
  <div // Created literals for the card object.
    className={`card ${isSelected ? "selected" : ""}`} // If the card is selected, then add the selected class to the card.
    onClick={onClick} // Also, add the onClick event to the card.
  >
    <div>{card.value}</div>
    <div>{card.suit}</div>
  </div>
);

// <div>
// <button className="btn btn-danger m-1" onClick={}>
//   Toss
// </button>
// <button className="btn btn-secondary m-1" onClick={}>
//   Wildcard
// </button>
// <button className="btn btn-success m-1" onClick={}>
//   Regroup
// </button>
// </div>

const App = () => {
  const [deck, setDeck] = React.useState(shuffleArray(generateDeck())); // Create a deck and shuffle, it before its displayed
  const [hand, setHand] = React.useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(null);

  const handleDeckClick = () => {
    if (deck.length === 0) return;
    const randomIndex = Math.floor(Math.random() * deck.length); // Randomly select a card from the deck.
    const card = deck[randomIndex];
    setHand((prev) => [...prev, card]);
    setDeck((prev) => prev.filter((_, idx) => idx !== randomIndex)); // Filter the deck to remove the drawn card.
    setSelectedCardIndex(null);
  };
};

//I need to add deal5 as well as deal7 buttons to the app and their functionalities

const dealingCards = () => {
  const newCardDeck = shuffleArray([deck, hand]);
  //dealt array
  for (let i = 0; i < num || newCardDeck.length; i++) {
    const randomIndes = Math.floor(Math.random() * newCardDeck.length);
    newCardDeck.splice(randomIndex, 1);
  }
};
