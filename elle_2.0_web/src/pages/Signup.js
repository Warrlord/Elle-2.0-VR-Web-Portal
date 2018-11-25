import React from 'react';
import { Card, Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			age: '',
			sex: '',
			password: '',
			motivation: '',
			permission: 'User',
			message: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.change = this.change.bind(this);
		this.submit = this.submit.bind(this);
	};

	handleChange(event) {
			 this.setState({
					 sex: event.target.value,
			 })
	 }

	change(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submit(e) {
		console.log(this.state.username);
		console.log(this.state.sex);
		e.preventDefault();
		axios.post('http://10.171.204.206/register', {
			username: this.state.username,
			password: this.state.password,
 			age: this.state.age,
			sex: this.state.sex,
			motivation: this.state.motivation
		}).then(res => {
			localStorage.setItem('jwt', res.data);
			this.props.history.push('/login');
		});
	}


  render() {
    return (
			<Card body>
	      <Form onSubmit={e => this.submit(e)}>
	       <FormGroup>
	          <Label for="userName">Username</Label>
	          <Input value={this.state.username}
							onChange={e => this.change(e)}
							id="username"
							name="username"
							placeholder="Username"
							/>
	          <FormFeedback>You will not be able to see this</FormFeedback>
	          <FormText>Username to be Identified on the Site.</FormText>
	        </FormGroup>
	        <FormGroup>
	          <Label for="age">Age:</Label>
	          <Input value={this.state.age}
							onChange={e => this.change(e)}
							id="age"
							name="age"
							placeholder="18"
							/>
	          <FormText>Your Age.</FormText>
	        </FormGroup>
					<FormGroup>
						<Label for="sex">Sex:</Label>
						<Input value={this.state.sex}
							onChange={(e) => this.handleChange(e)}
							type="select"
							name="sex"
							id="sex">
							<option value="F">Male</option>
							<option value="M">Female</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="motivation" sm={2}>Movitvation:</Label>
						<Input value={this.state.motivation}
							onChange={e => this.change(e)}
							type="textarea"
							name="motivation"
							id="motivation" />
					</FormGroup>
	        <FormGroup>
	          <Label for="password">Password</Label>
	          <Input value={this.state.password}
							onChange={e => this.change(e)}
							type="text"
							id="password"
							name="password"
							placeholder="*********"/>
	          <FormText>Please enter your chosen password.</FormText>
	        </FormGroup>
					<Button type="submit">Signup</Button>
	      </Form>
					<Link to='/login'>Login</Link>
			</Card>
    );
  }
}
