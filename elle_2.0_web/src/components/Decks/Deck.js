import React from 'react'
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, FormText, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Deck = (props) => {
  const { deck, deckPathname } = props;
  return (
    <Container className='Deck'>
      <Row className='Header'>
        <Col>
        </Col>

      </Row>

      <Row>

      </Row>
    </Container>
  );
};

export default Deck
