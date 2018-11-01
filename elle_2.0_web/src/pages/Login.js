import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <Container>
        <h3>Login</h3>
        <Form >
          <FormGroup>
            <Label for="username" hidden>Username</Label>
            <Input type="username" name="username" id="username" placeholder="Username" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          {' '}
          <Button color="primary">Submit</Button>
        </Form>
        <Link to ='/Signup' >Signup</Link>
      </Container>
    );
  }
}
