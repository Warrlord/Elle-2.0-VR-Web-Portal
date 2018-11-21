import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import SessionList from '../components/Sessions/SessionList';


export default class Sessions extends React.Component {
  constructor() {
    super();

    this.state = {
      sessions: [],

      LoggedAnswes: []
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
