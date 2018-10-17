import { PropTypes, Component } from 'react'

export class AddCard extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()
	}

	render() {

		const { eng, translate, engpic, imgpic, tranpic, pair1,pair2, pair3 } = this.props

		return (
			<form onSubmit={this.submit} className="add-card">

				<button>Add Card</button>
			</form>
		)
	}
}

AddCard.defaultProps = {

}


AddCard.propTypes = {

}
