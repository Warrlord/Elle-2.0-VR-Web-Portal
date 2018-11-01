import React from 'react'
import { Table } from 'reactstrap';
import Deck from './Deck';

const DeckList = (props) => {
	    return (
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Deck Name</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {props.decks.map((decks) => {
              return (
                <Deck
                  key={decks.id}
                  decks={decks}/>
              )
            })}
          </tbody>
        </Table>
	    )
}

export default DeckList
