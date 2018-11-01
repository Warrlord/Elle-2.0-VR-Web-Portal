import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "TempUser",
      age: "18",
      sex: "M",
      userID: "0123",
      description: "Test account"
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
            <Label for="age">Age</Label>
            <Input type="number" name="age" id="age" disabled="true" placeholder={this.state.age} />
          </FormGroup>
          <FormGroup row>
            <Label for="sex">Sex</Label>
            <Input type="text" name="sex" id="sex" disabled="true" placeholder={this.state.sex} />
          </FormGroup>
          <FormGroup>
            <Label for="description" sm={2}>Description:</Label>
            <Input type="textarea" name="description" id="description" placeholder={this.state.description} />
            <Button>Update Description</Button>
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
