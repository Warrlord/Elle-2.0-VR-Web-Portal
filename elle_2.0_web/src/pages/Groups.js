import React from 'react';
import { Collapse, Button, Card, Form, FormGroup,
  Label, Input, Container, Row, Col, TabContent,
  TabPane, Nav, NavItem, NavLink, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import { Route } from 'react-router-dom';


import GroupList from '../components/Groups/GroupList';
import GroupDecks from '../components/Groups/GroupDecks';
import GroupUsers from '../components/Groups/GroupUsers';
import GroupSessions from '../components/Groups/GroupSessions';
import GroupStats from '../components/Groups/GroupStats';
import DeckList from '../components/Decks/DeckList';
import GroupNav from '../components/Groups/GroupNav';

export default class Groups extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.submitGroup = this.submitGroup.bind(this);

    this.state = {
      groupName: '',
      groups: [],

      decks: [],

      group_user: [],

      user: []
    };
  }
  componentDidMount() {
      axios.get('http://10.171.204.206/groups', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
          console.log(res.data);
          const groups = res.data;
          this.setState({
            groups : res.data });
        }).catch(function (error) {
          console.log(error);
        });
    }

  submitGroup(e) {
    e.preventDefault();
    axios.post('http://10.171.204.206/group', {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      groupName: this.state.groupName,
    }).then(res => {
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
                    <GroupNav
                      groups={this.state.groups}
                      groupsPathname={matchPath}
                    />
                    <Form onSubmit={e => this.submitGroup(e)}>
                      <FormGroup>
                        <Label for="groupName">Deck Name</Label>
                        <Input type="text"
                        onChange={e => this.change(e)}
                        value={this.state.groupName}
                        name="groupName"
                        id="groupName"
                        placeholder="Group Name" />
                      </FormGroup>
                      <Button color="primary" type="submit">Add Group</Button>
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
                          <h3>Please select a Group on the left</h3>
                        </div>
                      )} />
                      <Route
                        path={`${matchPath}/:id`}
                        render={({ match }) => {
                          const group = this.state.groups.find(
                            (a) => a.id === match.params.id
                          );
                          return (
                            <Container>
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
