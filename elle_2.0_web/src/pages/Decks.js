import React from 'react';

import Deck from '../components/Decks/Deck'
import DeckHeader from '../components/Decks/DeckHeader'

export default class Decks extends React.Component {
  constructor() {
    super();
    this.state = {
      decks: [
        {
          id: 1,
          name: "Test Deck",
          author: "Mark",
          cardnum: "1",
        },
        {
          id: 2,
          name: "Test Deck 02",
          author: "Sam",
          cardnum: "3",
        }
      ]
    }
  }


  render() {
    return (
      <div>
      </div>
    )
  }
}
