import React from 'react';
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';


import GroupList from '../components/Groups/GroupList';
import GroupDecks from '../components/Groups/GroupDecks';
import GroupUsers from '../components/Groups/GroupUsers';
import GroupSessions from '../components/Groups/GroupSessions';
import GroupStats from '../components/Groups/GroupStats';
import DeckList from '../components/Decks/DeckList';

export default class Groups extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.toggleNewGroup = this.toggleNewGroup.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.toggleDeck = this.toggleDeck.bind(this);

    this.state = {
      collapseGroup: false,
      colapse: false,
      colapseDeck: false,
      collapseNewGroup: false,
      author: "TempUser",
      selectedDeck: "",
      selectedCard: "",
      activeTab: "1",

      groups: [],

      decks: [],

      group_user: [],

      user: []
    };
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleNewGroup() {
    this.setState({ collapseNewGroup: !this.state.collapseNewGroup });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleDeck() {
    this.setState({ collapseDeck: !this.state.collapseDeck });
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
        <Row><h3>Please Choose a Group</h3></Row>
        <Row className="Seperated col">
          <Col className="Left Col" xs="3">
          </Col>
          <Col className="Right Col">
          </Col>
        </Row>
        <Row><p>Selected Card: {this.state.selectedCard}</p></Row>
        <Row>
          <Col>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }} block>Groups</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <Button color="info" onClick={this.toggleNewGroup}>New Group</Button>
                  <Collapse isOpen={this.state.collapseNewGroup}>
                    <Form>
                      <FormGroup>
                        <Label for="groupName" >Group Name:</Label>
                        <Input type="groupName" name="groupName" id="groupName" placeholder="Group Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="author" >Author:</Label>
                        <Input type="author" name="author" id="author" placeholder={this.state.author} />
                      </FormGroup>
                      <Button color="secondary" block>Add Group</Button>
                    </Form>
                  </Collapse>
                  <GroupList
                    groups={this.state.groups}
                    />
              </Card>
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" onClick={this.toggleDeck} style={{ marginBottom: '1rem' }} block>Decks</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Collapse isOpen={this.state.collapseDeck}>
              <Card>
                  <DeckList
                    decks={this.state.decks}
                    />
              </Card>
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav tabs>
              <NavItem>
                <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggleTab('1'); }}
                >
                  LeaderBoard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggleTab('2'); }}
                >
                  Sessions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggleTab('3'); }}
                >
                  Analytics
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <GroupUsers />
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <GroupSessions />
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <GroupStats />
              </Row>
            </TabPane>
          </TabContent>
        </Row>
      </Container>
    )
  }
}
