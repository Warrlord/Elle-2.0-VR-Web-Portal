import React from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RNavLink} from 'react-router-dom';

const DeckNav = (props) => {
  const { decks, decksPathname } = props;
  return (
    <Nav vertical>
      <NavItem>
      {
        decks.map((deck) => {
        return (
            <NavLink
              key={deck.deckID}
              to={`${decksPathname}/${deck.deckID}`}
              className='item'
              tag={RNavLink}
            >
              {deck.deckName}
            </NavLink>
        )})
      }
      </NavItem>
    </Nav>
  )

};

export default DeckNav;
