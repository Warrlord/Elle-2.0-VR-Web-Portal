import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Button } from 'reactstrap';

export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			age: '',
			sex: '',
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
	          <Label for="age">Age:</Label>
	          <Input placeholder="18"/>
	          <FormText>Your Age.</FormText>
	        </FormGroup>
					<FormGroup>
						<Label for="sex">Sex:</Label>
						<Input type="select" name="sex" id="sex">
							<option>Male</option>
							<option>Female</option>
							<option>Prefer Not To Specify</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="description" sm={2}>Description:</Label>
						<Input type="textarea" name="description" id="description" />
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
