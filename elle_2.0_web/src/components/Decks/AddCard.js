import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, FormText, Col } from 'reactstrap';
import axios from 'axios';

class AddCard extends React.Component {
	constructor(props) {
		super(props);

		this.change = this.change.bind(this);

		this.state = {
			id: this.props.id,
			front: "",
			back: "",
			cardName: "",
			difficulty: 1,
			selectedFile: null
		};
	}

	uploadHandler = () => {
	  const formData = new FormData()
	  formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
	  axios.post('http://10.171.204.206/file-upload', formData)
	}

	fileChangedHandler = (event) => {
	  this.setState({selectedFile: event.target.files[0]})
	}

	change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	submitCard(e) {
    e.preventDefault();
		console.log(this.state.cardName);
		console.log(this.state.front);
		console.log(this.state.back);
		console.log(this.state.difficulty);
    var data = {
			front: this.state.front,
			back: this.state.back,
			cardName: this.state.cardName,
			difficulty: this.state.difficulty,
    }
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
      axios.post('http://10.171.204.206/card/'+this.state.id, data, {headers:headers})
      .then(res => {
        console.log(res.data);
      }).catch(function (error) {
        console.log(error);
      });
  }

		render () {
	    return (
				<Form onSubmit={e => this.submitCard(e)}>
					<Row>
						<Col>
							<FormGroup>
								<Label for="cardName">Card Name:</Label>
								<Input type="text"
								name="cardName"
								onChange={e => this.change(e)}
								value={this.state.cardName}
								id="cardName"
								placeholder="Card Name" />
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<FormGroup>
								<Label for="front">English Word:</Label>
								<Input type="text"
								name="front"
								onChange={e => this.change(e)}
								value={this.state.front}
								id="front"
								placeholder="English Word" />
							</FormGroup>
						</Col>
					</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="back">Translated Word:</Label>
							<Input type="text"
							name="back"
							onChange={e => this.change(e)}
							value={this.state.back}
							id="back"
							placeholder="Translated Word" />
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="picFile">Picture: </Label>
							<Input type="file" onChange={this.fileChangedHandler} name="picfile" id="picFile" />
							<FormText color="muted">
								Pick an actual Image for the card.
							</FormText>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for="audioFile">Audio File: </Label>
							<Input type="file" onChange={this.fileChangedHandler} name="audiofile" id="audioFile" />
							<FormText color="muted">
								Pick an audio file for the card.
							</FormText>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button color="primary" block type="submit">Add Card</Button>
					</Col>
				</Row>
				</Form>
	    )
		}
}

export default AddCard
