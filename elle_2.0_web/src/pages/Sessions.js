import React, { Component } from 'react';
import { Card, Container, Row, Col, } from 'reactstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';

import SessionList from '../components/Sessions/SessionList';
import SessionNav from '../components/Sessions/SessionNav';
import Rounds from '../components/Sessions/Rounds';

export default class Sessions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '',

      sessions: [],

      LoggedAnswers: []
    }
  }

  componentDidMount() {
    axios.get('http://10.171.204.206/sessions/')
      .then(res => {
        const sessions = res.data;
        this.setState({ sessions });
      });
  }

  render() {

    const matchPath = this.props.match.path;

    return (
      <Container>
        <Row><h3>Your Elle VR Sessions:</h3></Row>
        <Row className="Seperated Col">
        <Col className="Left Column" xs="3">
          <Row>
            <Col>
                <Card>
                  <SessionNav
                    sessions={this.state.sessions}
                    sessionsPathname={matchPath}
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
                  <Route exact path={matchPath} render={() => (
                    <div>
                      <h3>Please select a Deck on the left</h3>
                    </div>
                  )} />
                  <Route
                    path={`${matchPath}/:sessionID`}
                    render={({ match }) => {
                      const album = this.state.sessions.find(
                        (a) => a.id === match.params.sessionID
                      );
                      return (
                        <Rounds
                          session={this.state.session}
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
    );
  }
}
