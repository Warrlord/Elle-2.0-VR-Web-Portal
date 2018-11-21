import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userID: this.props.userID,
        users: [],
        username: "temp",
        permissionGroup: "Admin",
        isPendingAdmin: "1",
        sex: "M",
        age: "18",
        motivation: "Test",
        newpass: "",
        repass: ""
    };

    this.change = this.change.bind(this);
    this.submitMot = this.submitMot.bind(this);
    this.submitPass= this.submitPass.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

submitMot(e) {
    e.preventDefault();
    axios.post('10.171.204.206/update/:userID/motivation', {
      motivation: this.state.motivation,
    });
  }

submitPass(e) {
    e.preventDefault();
    axios.post('10.171.204.206/update/:userID/newpass', {
      password: this.state.newpass,
    });
  }

componentDidMount() {
  axios.get('10.171.204.206/user/:userID')
    .then(res => {
      const users = res.data;
      this.setState({ users });
    });
}

  render() {
    return (
      <Container>
      <h3>Profile</h3>
        <Form className="ProfileForm">
          <FormGroup row>
            <Label for="username">Username</Label>
            <Input type="text"
            name="username"
            id="username"
            disabled
            value={this.state.username} />
          </FormGroup>
          <FormGroup row>
            <Label for="age">Age</Label>
            <Input type="number"
            name="age"
            id="age"
            disabled
            value={this.state.age} />
          </FormGroup>
          <FormGroup row>
            <Label for="sex">Sex</Label>
            <Input type="text"
            name="sex"
            id="sex"
            disabled
            value={this.state.sex} />
          </FormGroup>
          <FormGroup onSubmit={e => this.submitMot(e)}>
            <Label for="motivation" sm={2}>Motivation:</Label>
            <Input type="textarea"
            name="motivation"
            id="motivation"
            onChange={e => this.change(e)}
            value={this.state.motivation} />
            <Button type="submit">Update Description</Button>
          </FormGroup>
        </Form>
        <Form className="PasswordReset" onSubmit={e => this.submitPass(e)}>
        <h3>New Password</h3>
          <Label for="Reset Password">Reset Password</Label>
          <FormGroup>
            <Label for="newpass">New Password</Label>
            <Input type="text"
            name="newpass"
            id="newpass"
            onChange={e => this.change(e)}
            value={this.state.newpass} />
          </FormGroup>
          <FormGroup>
            <Label for="re-password">Re-Enter New Password</Label>
            <Input type="text" name="re-password" id="re-password" placeholder="Plaease Re-enter new password" />
          </FormGroup>
          <Button type="submit">Submit New Password</Button>
        </Form>
      </Container>
    );
  }
}
