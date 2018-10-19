import React, { Component } from 'react'


class Deck extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { id, name, author, cardnum } = this.props.adeck;
	    return (
				<div>

				</div>
	    )
	}
}

export default Deck
