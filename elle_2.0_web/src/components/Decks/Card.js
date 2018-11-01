import React from 'react'


const Card = (props) => {
  const { cards } = props;
  return (
    <tr>
			<td>{cards.id}</td>
			<td>{cards.engName}</td>
			<td>{cards.traName}</td>
      <td>{cards.author}</td>
      <td>{cards.author}</td>
      <td>{cards.author}</td>
      <td>{cards.author}</td>
    </tr>
  );
};

export default Card
