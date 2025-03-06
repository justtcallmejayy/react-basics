# React Card Deck Application

## Overview

React Card Deck is a web application built using ReactJS with function components and hooks. It simulates a deck of 52 standard playing cards (with suits ♥, ♦, ♣, ♠ and values A, 2–10, J, Q, K) and allows users to manipulate the deck and hand through various interactive features. This project was developed as part of Assignment #3 – React Basics.

## Features

- **Dynamic Deck Generation:**  
  The deck is generated dynamically with 52 cards and is shuffled before display.

- **Interactive Deck:**  
  - **Deal a Card:** Click the deck to randomly remove one card and add it to your hand.
  - **Deal 5 / Deal 7:** Return any existing hand cards to the deck and deal either 5 or 7 random cards to your hand.
  - **Reset:** Return all hand cards back to the deck and clear the hand.

- **Card Interaction:**  
  - **Select & Swap:** Clicking a card selects it (highlighted with a border). Clicking a different card while one is selected swaps their positions.
  - **Deselect:** Clicking the selected card again will deselect it.
  - **Toss:** The selected card can be permanently removed from the hand using the Toss button.

- **Additional Functionality:**  
  - **Regroup:** Shuffle the current hand randomly.
  - **Wildcard:** Add a new card with a randomly selected suit and value to your hand.

- **Responsive & Professional Styling:**  
  The application is styled using Bootstrap along with custom CSS to create an attractive, modern UI that works well across devices.

## Technologies Used

- **ReactJS** (with function components and hooks)
- **JavaScript (ES6+)**
- **Babel** (for JSX transpilation)
- **Bootstrap** (for responsive styling)
- **Git** (for version control with frequent, descriptive commits)

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   https://github.com/justtcallmejayy/react-basics.git
