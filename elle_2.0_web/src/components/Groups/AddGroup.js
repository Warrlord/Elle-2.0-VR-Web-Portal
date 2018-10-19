import { PropTypes, Component } from 'react'

export class AddGroup extends Component {

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
			<form onSubmit={this.submit} className="add-day-form">

				<button>Create Group</button>
			</form>
		)
	}
}

AddGroup.defaultProps = {

}


AddGroup.propTypes = {

}
