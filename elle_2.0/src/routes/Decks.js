import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import User from './components/Deck'

class Decks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            decks: [
            {
                deckname: "Test Deck",
                cardnum: "2",
                author: "Jake",
            }
          ]
        }
    }

    render() {
    	const { decks } = this.state
        return (
            <div className="deck-list">
                <h1>Decks</h1>
            </div>
        )
    }
}

export default Decks
