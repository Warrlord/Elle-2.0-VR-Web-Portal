import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Button } from 'reactstrap';

export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			playerName: '',
			password: ''
		}
	}



  render() {
    return (
			<Container>
	      <Form>
	       <FormGroup>
	          <Label for="userName">Username</Label>
	          <Input placeholder="Username"/>
	          <FormFeedback>You will not be able to see this</FormFeedback>
	          <FormText>Username to be Identified on the Site.</FormText>
	        </FormGroup>
	        <FormGroup>
	          <Label for="playerName">Player Name</Label>
	          <Input placeholder="Player 1"/>
	          <FormFeedback valid>Sweet! that name is available</FormFeedback>
	          <FormText>Player Name that you used in Game.</FormText>
	        </FormGroup>
	        <FormGroup>
	          <Label for="password">Password</Label>
	          <Input placeholder="*********"/>
	          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
	          <FormText>Please enter your chosen password.</FormText>
	        </FormGroup>
					<FormGroup>
						<Label for="password">Re-Enter Password</Label>
						<Input placeholder="*********"/>
						<FormFeedback>Oh noes! that name is already taken</FormFeedback>
						<FormText>Please Re-enter your password.</FormText>
					</FormGroup>
					<Button>Submit</Button>
	      </Form>
			</Container>
    );
  }
}
