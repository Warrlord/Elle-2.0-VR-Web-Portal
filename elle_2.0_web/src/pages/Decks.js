import React, { Component } from 'react';
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';

import AddCard from '../components/Decks/AddCard'
import DeckNav from '../components/Decks/DeckNav'

import CardList from '../components/Decks/CardList'

export default class Decks extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.toggleNewCard = this.toggleNewCard.bind(this);

    this.state = {
      colapse: false,
      collapseNewCard: false,
      userID: "3001",
      username: "TempUser",

      decks: [
        {
          deckID: 300,
          deckName: "Spanish Vocab",
          author: 'Mark'
        },
        {
          deckID: 302,
          deckName: "Spanish Vocab",
          author: 'Mark'
        }
      ],

      cards: [],

      audio: [],

      image: []
    };
  }

  componentDidMount() {
    axios.get('10.171.204.206/decks/userID')
      .then(res => {
        const decks = res.data;
        this.setState({ decks });
      });
  }

  toggleNewCard() {
    this.setState({ collapseNewCard: !this.state.collapseNewCard });
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

    const matchPath = this.props.match.path;

    return (
      <Container>
        <Row><h3>Your Elle VR Decks:</h3></Row>
        <Row className="Seperated Col">
        <Col className="Left Column" xs="3">
          <Row>
            <Col>
                <Card>
                    <Form>
                      <FormGroup>
                        <Label for="deckname" hidden>Deck Name</Label>
                        <Input type="deckname" name="deckname" id="deckname" placeholder="Deck Name" />
                      </FormGroup>
                      <Button color="primary" block>Add Deck</Button>
                    </Form>
                      <DeckNav
                        decks={this.state.decks}
                        decksPathname={matchPath}
                      />
                </Card>
            </Col>
          </Row>
        </Col>
        <Col className="Right Column">
          <Row>
            <Col>
              <Container>
                    <Card>
                      <Button color="info" onClick={this.toggleNewCard}>New Card</Button>
                      <Collapse isOpen={this.state.collapseNewCard}>
                        <AddCard />
                      </Collapse>
                      <Route exact path={matchPath} render={() => (
                        <div>
                          <h3>Please select a Deck on the left</h3>
                        </div>
                      )} />
                      <Route
                        path={`${matchPath}/:deckID`}
                        render={({ match }) => {
                          const album = this.state.decks.find(
                            (a) => a.id === match.params.deckID
                          );
                          return (
                            <CardList
                              cards={this.state.cards}
                            />
                          );
                        }}
                      />

                    </Card>
              </Container>
            </Col>
          </Row>
        </Col>
        </Row>
      </Container>
    )
  }
}
