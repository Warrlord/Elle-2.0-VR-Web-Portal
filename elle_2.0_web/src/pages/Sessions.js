import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import SessionList from '../components/Sessions/SessionList';


export default class Sessions extends React.Component {
  constructor() {
    super();

    this.state = {
      sessions: [
        {
          id: "100",
          userid: "3001",
          wrongAns: "21",
          correctAns: "31",
          date: "2018-18-12",
          puzleAttempted: "puzzlename",
          responseScore: "31",
          playerScore: "75",
          elaspsedTime: "00:10:56"
        }
      ],

      LoggedAnswes: [
        {
          cardID: "0",
          sessionID: "100",
          numberOfCorrectAnswers: "1",
          numberOfIncorrectAnswers: "2"
        },
        {
          cardID: "1",
          sessionID: "100",
          numberOfCorrectAnswers: "1",
          numberOfIncorrectAnswers: "2"
        },
        {
          cardID: "2",
          sessionID: "100",
          numberOfCorrectAnswers: "1",
          numberOfIncorrectAnswers: "2"
        },
        {
          cardID: "3",
          sessionID: "100",
          numberOfCorrectAnswers: "1",
          numberOfIncorrectAnswers: "2"
        },
        {
          cardID: "4",
          sessionID: "100",
          numberOfCorrectAnswers: "1",
          numberOfIncorrectAnswers: "2"
        },
      ]
    }
  }


  render() {
    return (
      <Container>
        <Row>
          <h3>Sessions: </h3>
        </Row>
        <Row>
          <SessionList
            sessions={this.state.sessions}
          />
        </Row>
      </Container>
    );
  }
}
