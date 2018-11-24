import React from 'react'
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, FormText, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Deck = (props) => {
  const { deck, deckPathname } = props;
  return (
    <Container className='Deck'>
      <Row className='Header'>
        <div className='ui middle aligned three column grid'>
          <div className='six wide column' style={{ minWidth: '212px' }}>
            <img
              src={deck.imageUrl}
              style={{ width: '212px' }}
              alt='album'
            />
          </div>
          <div className='one wide column' />
          <div className='six wide column'>
            <p>
              {
                `By ${deck.artist.name}
                - ${deck.year}
                - ${deck.tracks.length} songs`
              }
            </p>
            <Link
              to={deckPathname}
              className='ui left floated large button'
            >
              Close
            </Link>
          </div>
        </div>
      </Row>
      <div className='spacer row' />
      <div className='row'>
        <table
          className='ui very basic single line unstackable selectable table'
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Song</th>
              <th><i className='icon clock' /></th>
            </tr>
          </thead>
          <tbody>
            {
              deck.cards.map((card) => (
                <tr
                  key={card.id}
                >
                  <td>{card.trackNumber}</td>
                  <td>{card.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Deck
