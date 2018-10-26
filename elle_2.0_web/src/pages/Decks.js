import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, Container, Row, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

import Deck from '../components/Decks/Deck'
import DeckList from '../components/Decks/DeckList'
import CardList from '../components/Decks/CardList'

export default class Decks extends Component {
  constructor() {
    super();
    this.toggleDeck = this.toggleDeck.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapseDeck: false,
      colapse: false,
      author: "TempUser",

      decks: [
        {
          id: 1,
          name: "Test Deck",
          author: "Mark"
        },
        {
          id: 2,
          name: "Test Deck 02",
          author: "Sam"
        }
      ],

      cards: [
        {
          id: 1,
          engName: "Goodbye",
          traName: "adios",
          author: "TempUser",
          engPic: 0,
          tranPic: 0,
          pic: 0,
          audioFile: 0,
        },
        {
          id: 1,
          engName: "hello",
          traName: "aloha",
          author: "TempUser",
          engPic: "0",
          tranPic: "0",
          pic: "0",
          audioFile: "0"
        }
      ]
    };
  }

  toggleDeck() {
    this.setState({ collapseDeck: !this.state.collapseDeck });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  formSubmitted(event) {
  event.preventDefault();

  this.setState({
    newDeck: '',
    decks: [...this.state.decks, {
      title: this.state.newDeck,
      author: "TempUser"
    }]
  });
}

  render() {
    return (
      <Container>
          <Button color="primary" onClick={this.toggleDeck} style={{ marginBottom: '1rem' }}>Decks:</Button>
          <Collapse isOpen={this.state.collapseDeck}>
            <Card>
              <Form>
                <FormGroup>
                  <Label for="deckname" hidden>Username</Label>
                  <Input type="username" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword" hidden>Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                <Button color="primary">Add Deck</Button>
              </Form>
              <DeckList
                decks={this.state.decks}
              />
            </Card>
          </Collapse>
          <br/>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Cards:</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <Form>
                  <FormGroup>
                    <Label for="cardname" hidden>English Word:</Label>
                    <Input type="cardname" name="cardname" id="cardname" placeholder="English Word" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="transname" hidden>Translated Word:</Label>
                    <Input type="transname" name="transname" id="transname" placeholder="Translated Word" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="author" hidden>Author</Label>
                    <Input type="name" name="author" id="author" placeholder="TempUser"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="englishPic">English Text Image:</Label>
                    <Input type="file" name="transfile" id="englishPic" />
                    <FormText color="muted">
                      Pick a English Text Image for the card.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="tranpic">Translated Text Image:</Label>
                    <Input type="file" name="transfile" id="tranpic" />
                    <FormText color="muted">
                      Pick a translated text image for the card.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="picFile">Picture: </Label>
                    <Input type="file" name="picfile" id="picFile" />
                    <FormText color="muted">
                      Pick an actual Image for the card.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="audioFile">Audio File: </Label>
                    <Input type="file" name="audiofile" id="audioFile" />
                    <FormText color="muted">
                      Pick an audio file for the card.
                    </FormText>
                  </FormGroup>
                  <Button color="primary">Add Card</Button>
                </Form>
                <CardList
                  cards={this.state.cards}
                />
              </Card>
            </Collapse>
      </Container>
    )
  }
}
