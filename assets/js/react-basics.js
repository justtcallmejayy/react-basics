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

  //I need to add deal5 as well as deal7 buttons to the app and their functionalities

  const dealingCards = () => {
    const dealt = [];
    const newCardDeck = shuffleArray([...deck, ...hand]);
    for (let i = 0; i < num && newCardDeck.length; i++) {
      const randomIndes = Math.floor(Math.random() * newCardDeck.length);
      dealt.push(newCardDeck[randomIndes]);
      newCardDeck.splice(randomIndes, 1);
      console.log(newCardDeck);
    }
    setDeck(newCardDeck);
    setHand(dealt);
    setSelectedCardIndex(null);
  };

  // I need to add resetHand, tossCard and regroupHand functions to the app and their functions as well for the buttons.
  const resetHand = () => {
    setDeck(shuffleArray([...deck, ...hand]));
    setHand([]);
    setSelectedCardIndex(null);
  };

  const tossCard = () => {
    if (selectedCardIndex !== null) {
      setHand((prev) => prev.filter((_, idx) => idx !== selectedCardIndex));
      setSelectedCardIndex(null);
    }
  };

  const regroupHand = () => {
    setHand(shuffleArray(hand));
    setSelectedCardIndex(null);
  };
  //New function to add a card selection and swapping fncs.
  // if the card is selected, then swap the card with the selected card.

  //if card index = null then select the card. or else card index = index set, later add new fnc to fix newhand using mapping
  const handleCardClick = (index) => {
    if (selectedCardIndex === null) {
      setSelectedCardIndex(index);
    } else if (selectedCardIndex === index) {
      setSelectedCardIndex(null);
    } else {
      setHand((prev) => {
        const newHand = [...prev]; // Copy the hand array.
        [newHand[selectedCardIndex], newHand[index]] = [
          // Swap the selected card with the new card, using the index and if else conditions.
          newHand[index],
          newHand[selectedCardIndex],
        ];
        return newHand;
      });
      setSelectedCardIndex(null);
    }
  };
  const addWildcard = () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    // Use Date.now() as a unique id for the wildcard card.
    const wildcard = { id: Date.now(), suit: randomSuit, value: randomValue };
    setHand((prev) => [...prev, wildcard]);
  };

  //Now need to add the fnc for wild card(the most challenging part of the project, as teh wildcard will also generate teh rest of the buttons and their functionalities)
  //The wild card will be the card with mvc

  /*
6 buttons, with onlick and likned fncs.
1. Deal 5
2. Deal 7
3. Reset Hand
4. Toss Card
5. Regroup Hand
6. Wild Card

and displaying usinf hand.map

Now this will be useful

<div>
<button className="btn btn-danger m-1" onClick={}>
  Toss
</button>
<button className="btn btn-secondary m-1" onClick={}>
  Wildcard
</button>
<button className="btn btn-success m-1" onClick={}>
  Regroup
</button>
</div>

*/
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center my-3">
        <button className="btn btn-primary m-1" onClick={handleDeckClick}>
          {deck.length > 0 ? "Deal a Card" : "No Cards Remaining"}
        </button>
        <button className="btn btn-info m-1" onClick={() => dealCards(5)}>
          Deal 5
        </button>
        <button className="btn btn-info m-1" onClick={() => dealCards(7)}>
          Deal 7
        </button>
        <button className="btn btn-warning m-1" onClick={resetHand}>
          Reset
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-3">
        <button className="btn btn-danger m-1" onClick={tossCard}>
          Toss
        </button>
        <button className="btn btn-secondary m-1" onClick={addWildcard}>
          Wildcard
        </button>
        <button className="btn btn-success m-1" onClick={regroupHand}>
          Regroup
        </button>
      </div>
      {/* Deck display */}
      <div className="d-flex justify-content-center my-3">
        <div className="deck" onClick={handleDeckClick}>
          {deck.length > 0 ? (
            "Deck"
          ) : (
            <div className="no-cards">No Cards Remaining</div>
          )}
        </div>
      </div>
      {/* Hand display */}
      <div className="hand d-flex justify-content-center">
        {hand.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => handleCardClick(index)}
            isSelected={index === selectedCardIndex}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
