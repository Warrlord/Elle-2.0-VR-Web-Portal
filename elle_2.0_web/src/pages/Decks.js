import React, { Component } from 'react';
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, FormText, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import DeckList from '../components/Decks/DeckList'
import CardList from '../components/Decks/CardList'

export default class Decks extends Component {
  constructor() {
    super();
    this.toggleDeck = this.toggleDeck.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleNewDeck = this.toggleNewDeck.bind(this);
    this.toggleNewCard = this.toggleNewCard.bind(this);

    this.state = {
      collapseDeck: false,
      colapse: false,
      collapseNewDeck: false,
      collapseNewCard: false,
      author: "TempUser",
      selectedDeck: "",
      selectedCard: "",

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
          deckid: 1,
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

  toggleNewDeck() {
    this.setState({ collapseNewDeck: !this.state.collapseNewDeck });
  }

  toggleNewCard() {
    this.setState({ collapseNewCard: !this.state.collapseNewCard });
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
        <Row><h3>Welcome to your Decks!</h3></Row>
        <Row><h4>Selected Deck: {this.state.selectedDeck}</h4></Row>
        <Row><p>Selected Card: {this.state.selectedCard}</p></Row>
        <Row>
          <Col>
            <Button color="primary" onClick={this.toggleDeck} style={{ marginBottom: '1rem' }} block>Decks</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Collapse isOpen={this.state.collapseDeck}>
              <Card>
                <Button color="info" onClick={this.toggleNewDeck}>New Deck</Button>
                <Collapse isOpen={this.state.collapseNewDeck}>
                  <Form>
                    <FormGroup>
                      <Label for="deckname" hidden>Deck Name</Label>
                      <Input type="deckname" name="deckname" id="deckname" placeholder="Deck Name" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="author" hidden>Author</Label>
                      <Input type="author" name="author" id="author" placeholder={this.state.author} />
                    </FormGroup>
                    <Button color="primary" block>Add Deck</Button>
                  </Form>
                </Collapse>
                <DeckList
                  decks={this.state.decks}
                />
              </Card>
            </Collapse>
          </Col>
        </Row>
          <br/>
        <Row>
          <Col>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }} block>Cards</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Collapse isOpen={this.state.collapse}>
                  <Card>
                    <Button color="info" onClick={this.toggleNewCard}>New Card</Button>
                    <Collapse isOpen={this.state.collapseNewCard}>
                    <Form>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="cardname">English Word:</Label>
                            <Input type="cardname" name="cardname" id="cardname" placeholder="English Word" />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <Label for="englishPic">English Text Image:</Label>
                            <Input type="file" name="transfile" id="englishPic" />
                            <FormText color="muted">
                              Pick a English Text Image for the card.
                            </FormText>
                          </FormGroup>
                        </Col>
                      </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="transname">Translated Word:</Label>
                          <Input type="transname" name="transname" id="transname" placeholder="Translated Word" />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label for="tranpic">Translated Text Image:</Label>
                          <Input type="file" name="transfile" id="tranpic" />
                          <FormText color="muted">
                            Pick a translated text image for the card.
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="picFile">Picture: </Label>
                          <Input type="file" name="picfile" id="picFile" />
                          <FormText color="muted">
                            Pick an actual Image for the card.
                          </FormText>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label for="audioFile">Audio File: </Label>
                          <Input type="file" name="audiofile" id="audioFile" />
                          <FormText color="muted">
                            Pick an audio file for the card.
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="author" disabled>Author</Label>
                          <Input type="name" name="author" id="author" placeholder="TempUser"/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button color="primary" block>Add Card</Button>
                      </Col>
                    </Row>
                    </Form>
                    </Collapse>
                    <CardList
                      cards={this.state.cards}
                    />
                  </Card>
              </Collapse>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}
