import React from 'react'
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, FormText, Col, Nav, NavItem, NavLink, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import CardList from './CardList'
import axios from 'axios';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      deck: this.props.deck,

      deckName: '',
      ttype: "",

      cards: [],
    };

  }

  componentDidMount() {
      axios.get('http://10.171.204.206/deck/' +this.state.id, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      }).then(res => {
          console.log(res.data);
          const cards = res.data;
          this.setState({
            cards : res.data });
        }).catch(function (error) {
          console.log(error);
        });
        console.log(this.state.deck);
    }


  render () {
      return (
        <Container className='Deck'>
          <Row className='Header'>
            <Col>
              <Media body>
                <Media heading>
                  Deck Name : {}
                </Media>

              </Media>
            </Col>

          </Row>
            <CardList
            cards = {this.state.cards}
            />
          <Row>

          </Row>
        </Container>
      );
    };
  }

export default Deck
