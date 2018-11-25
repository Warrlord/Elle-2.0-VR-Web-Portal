import React from 'react'


const Card = (props) => {
  const { cards } = props;
  return (
    <tr>
			<td>{cards.id}</td>
			<td>{cards.front}</td>
			<td>{cards.back}</td>
      <td>{cards.imageLocation}</td>
      <td>{cards.audioLocation}</td>
    </tr>
  );
};

export default Card
