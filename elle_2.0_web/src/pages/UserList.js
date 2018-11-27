import React, { Component } from 'react';
import User from '../components/UserList/User';
import { Container, Row, Col, Table, Form, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
          userID: '',
          users: []
        }
    }

    componentDidMount() {
        axios.get('http://10.171.204.206/users', {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
        }).then(res => {
            console.log(res.data);
            this.setState({
              users : res.data });
          }).catch(function (error) {
            console.log(error);
          });
      }


    render() {
        return (
          <Container className="user-list">
            <Row>
              <Col>
                <Form onSubmit={e => this.submit(e)}>
                  <Label for="cardID">Card ID:</Label>
                  <Input type="text" name="cardID"
                  onChange={e => this.change(e)}
                  value={this.state.cardID}
                  id="username" placeholder="Username" />
                  <Button color="danger" type="submit">Delete Card</Button>
                </Form>
              </Col>
            </Row>
            <Table hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Username</th>
                  <th>Permission</th>
                  <th>Pending Admin</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((users) => {
                  return (
                    <User
                      key={users.id}
                      users={users}/>
                  )
                })}
              </tbody>
            </Table>
          </Container>
        )
    }
}

export default UserList
