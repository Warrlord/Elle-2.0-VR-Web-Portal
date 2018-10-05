import { PropTypes, Component } from 'react'

export class AddDeck extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()
		console.log('deckname', this.refs.deckname.value)
	}

	render() {

		const { deckname, author } = this.props

		return (
			<form onSubmit={this.submit} className="add-day-form">

				<label htmlFor="deckname">Deck Name</label>
				<input id="deckname"
					   type="text"
					   required
					   defaultValue={deckname}
					   ref="deckname"/>

				<button>Add Deck</button>
			</form>
		)
	}
}

AddDeck.defaultProps = {
	deckname: "",
}


AddDeck.propTypes = {
	deckname: PropTypes.string.isRequired,
}
