import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

export default class Profile extends React.Component {
  render() {
    return (
			<Container>
	      <Form>
	        <FormGroup>
	          <Label for="exampleUser">Username</Label>
	          <Input type="username" name="username" id="exampleUser" placeholder="Username" />
	        </FormGroup>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email" name="email" id="email" placeholder="Email" />
					</FormGroup>
	        <FormGroup>
	          <Label for="examplePassword">Password</Label>
	          <Input type="password" name="password" id="examplePassword" placeholder="password" />
	        </FormGroup>
	        <FormGroup>
	          <Label for="description">Description</Label>
	          <Input type="text" name="text" id="description" />
	        </FormGroup>
	        <Button>Update Profile</Button>
	      </Form>
			</Container>
    );
  }
}
