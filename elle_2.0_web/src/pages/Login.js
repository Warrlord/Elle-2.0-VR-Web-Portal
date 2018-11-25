import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    axios.post('http://10.171.204.206/login', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res.data);
      console.log(res.data.access_token);
      console.log(res.data.permissions);
      localStorage.setItem('jwt', res.data.access_token);
      localStorage.setItem('per', res.data.permissions);
      this.props.history.push('/decks');
    });
  }

  render() {
    return (
      <Container>
        <h3>Login</h3>
        <Form onSubmit={e => this.submit(e)}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username"
            onChange={e => this.change(e)}
            value={this.state.username}
            id="username" placeholder="Username" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password"
            onChange={e => this.change(e)}
            value={this.state.password}
            id="password" placeholder="Password" />
          </FormGroup>
          {' '}
          <Button color="primary" type="submit">Submit</Button>
        </Form>
        <Link to ='/Signup' >Signup</Link>
      </Container>
    );
  }
}
