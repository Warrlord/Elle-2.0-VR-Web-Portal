import React, { Component } from 'react';
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, FormText, Col } from 'reactstrap';

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
						<Col>
							<FormGroup>
								<Label for="englishPic">English Text Image:</Label>
								<Input type="file" name="transfile" id="englishPic" />
								<FormText color="muted">
									Pick a English Text Image for the card.
								</FormText>
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
					<Col>
						<FormGroup>
							<Label for="tranpic">Translated Text Image:</Label>
							<Input type="file" name="transfile" id="tranpic" />
							<FormText color="muted">
								Pick a translated text image for the card.
							</FormText>
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
						<FormGroup>
							<Label for="author" disabled>Author</Label>
							<Input type="name" name="author" id="author" placeholder="TempUser"/>
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
