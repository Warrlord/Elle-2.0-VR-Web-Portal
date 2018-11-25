import React, { Component } from 'react';
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';

import AddCard from '../components/Decks/AddCard';
import DeckNav from '../components/Decks/DeckNav';
import Deck from '../components/Decks/Deck';


import CardList from '../components/Decks/CardList';

export default class Decks extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.toggleNewCard = this.toggleNewCard.bind(this);
    this.change = this.change.bind(this);
    this.state = {
      colapse: false,
      collapseNewCard: false,
      userID: "",
      username: "",

      deckName: "",
      ttype: "",

      decks: [],

      cards: [],

      audio: [],

      image: []
    };
  }

  componentDidMount() {
      axios.get('http://10.171.204.206/decks/49', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
          console.log(res.data);
          const decks = res.data;
          this.setState({
            decks : res.data });
        }).catch(function (error) {
          console.log(error);
        });
    }

  submitDeck(e) {
    e.preventDefault();
    var data = {
          deckName: this.state.deckName,
          ttype: this.state.ttype,
    }
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
        axios.post('http://10.171.204.206/deck', data, {headers:headers})
        .then(res => {
          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleNewCard() {
    this.setState({ collapseNewCard: !this.state.collapseNewCard });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
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
                    <DeckNav
                      decks={this.state.decks}
                      decksPathname={matchPath}
                    />
                    <Form onSubmit={e => this.submitDeck(e)}>
                      <FormGroup>
                        <Label for="deckName">Deck Name</Label>
                        <Input type="text"
                        onChange={e => this.change(e)}
                        value={this.state.deckName}
                        name="deckName"
                        id="deckName"
                        placeholder="Deck Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="ttype">Language Type</Label>
                        <Input type="text"
                        onChange={e => this.change(e)}
                        value={this.state.ttype}
                        name="ttype"
                        id="ttype"
                        placeholder="Portuguess" />
                      </FormGroup>
                      <Button color="primary" block type="submit">Add Deck</Button>
                    </Form>
                </Card>
            </Col>
          </Row>
        </Col>
        <Col className="Right Column">
          <Row>
            <Col>
              <Container>
                    <Card>
                      <Route exact path={matchPath} render={() => (
                        <div>
                          <h3>Please select a Deck on the left</h3>
                        </div>
                      )} />
                      <Route
                        path={`${matchPath}/:id`}
                        render={({ match }) => {
                          const deck = this.state.decks.find(
                            (a) => a.id === match.params.id
                          );
                          return (
                            <Container>
                              <Deck
                                id={match.params.id}
                                deck={deck}
                                deckPathname={matchPath}
                              />
                              <Button color="info" onClick={this.toggleNewCard} block>New Card</Button>
                                <Collapse isOpen={this.state.collapseNewCard}>
                                  <AddCard />
                                </Collapse>
                            </Container>
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
