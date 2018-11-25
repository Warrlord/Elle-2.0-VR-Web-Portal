import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, FormText, Col } from 'reactstrap';

const AddCard = (props) => {
	    return (
				<Form>
					<Row>
						<Col>
							<FormGroup>
								<Label for="cardname">English Word:</Label>
								<Input type="cardname" name="cardname" id="cardname" placeholder="English Word" />
							</FormGroup>
						</Col>
					</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="transname">Translated Word:</Label>
							<Input type="transname" name="transname" id="transname" placeholder="Translated Word" />
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="picFile">Picture: </Label>
							<Input type="file" name="picfile" id="picFile" />
							<FormText color="muted">
								Pick an actual Image for the card.
							</FormText>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for="audioFile">Audio File: </Label>
							<Input type="file" name="audiofile" id="audioFile" />
							<FormText color="muted">
								Pick an audio file for the card.
							</FormText>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button color="primary" block>Add Card</Button>
					</Col>
				</Row>
				</Form>
	    )
}

export default AddCard
