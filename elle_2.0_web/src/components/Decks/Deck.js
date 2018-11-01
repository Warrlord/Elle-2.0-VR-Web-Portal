import React from 'react'


const Deck = (props) => {
  const { decks } = props;
  return (
    <tr>
			<td>{decks.id}</td>
			<td>{decks.name}</td>
			<td>{decks.author}</td>
    </tr>
  );
};

export default Deck
