import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "TempUser",
      playername: "Player 1",
      userID: "0123",
    };
  }

  render() {
    return (
      <Container>
      <h3>Profile</h3>
        <Form className="ProfileForm">
          <FormGroup row>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" disabled="true" placeholder={this.state.username} />
          </FormGroup>
          <FormGroup row>
            <Label for="playerName">Player Name</Label>
            <Input type="text" name="playerName" id="playerName" disabled="true" placeholder={this.state.playername} />
          </FormGroup>
          <FormGroup row>
            <Label for="userID">User ID</Label>
            <Input type="text" name="userID" id="userID" disabled="true" placeholder={this.state.userID} />
          </FormGroup>
        </Form>
        <Form className="PasswordReset">
        <h3>New Password</h3>
          <Label for="Reset Password">Reset Password</Label>
          <FormGroup>
            <Label for="newPassword">New Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
          <FormGroup>
            <Label for="re-password">Re-Enter New Password</Label>
            <Input type="password" name="re-password" id="re-password" placeholder="Plaease Re-enter new password" />
          </FormGroup>
          <Button>Submit New Password</Button>
        </Form>
      </Container>
    );
  }
}
