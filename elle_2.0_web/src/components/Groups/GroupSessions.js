import React, { Component } from 'react'

export default class GroupSessions extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()

	}

	render() {

		const { name, decks } = this.props

		return (
			<div>

			</div>
		)
	}
}
