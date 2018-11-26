import React from 'react'
import { Media } from 'reactstrap';


const Card = (props) => {
  const { cards } = props;
  return (
    <tr>
			<td>{cards.front}</td>
			<td>{cards.back}</td>
      <td><img src={cards.imageLocation} alt={cards.front} /></td>
      <td>{cards.audioLocation}</td>
    </tr>
  );
};

export default Card
