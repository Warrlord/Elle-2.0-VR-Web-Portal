import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Button } from 'reactstrap';
import axios from 'axios';

export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			age: '',
			sex: '',
			password: '',
			motivation: ''
		}
	}

	submit(e) {
		e.preventDefault();
		axios.post('10.171.204.206/signup', {
			username: this.state.username,
			password: this.state.password
		}).then(res => {
			localStorage.setItem('jwt', res.data);
		});
	}


  render() {
    return (
			<Container>
	      <Form onSubmit={e => this.submit(e)}>
	       <FormGroup>
	          <Label for="userName">Username</Label>
	          <Input onChange={this.state.username} id="username" name="username" placeholder="Username"/>
	          <FormFeedback>You will not be able to see this</FormFeedback>
	          <FormText>Username to be Identified on the Site.</FormText>
	        </FormGroup>
	        <FormGroup>
	          <Label for="age">Age:</Label>
	          <Input onChange={this.state.age} id="age" name="age" placeholder="18"/>
	          <FormText>Your Age.</FormText>
	        </FormGroup>
					<FormGroup>
						<Label for="sex">Sex:</Label>
						<Input onChange={this.state.sex} type="select" name="sex" id="sex">
							<option>Male</option>
							<option>Female</option>
							<option>Prefer Not To Specify</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="motivation" sm={2}>Movitvation:</Label>
						<Input onChange={this.state.motivation} type="textarea" name="motivation" id="motivation" />
					</FormGroup>
	        <FormGroup>
	          <Label for="password">Password</Label>
	          <Input onChange={this.state.password} id="password" name="password" placeholder="*********"/>
	          <FormText>Please enter your chosen password.</FormText>
	        </FormGroup>
					<FormGroup>
						<Label for="password">Re-Enter Password</Label>
						<Input placeholder="*********"/>
						<FormText>Please Re-enter your password.</FormText>
					</FormGroup>
					<Button type="submit">Signup</Button>
	      </Form>
			</Container>
    );
  }
}
