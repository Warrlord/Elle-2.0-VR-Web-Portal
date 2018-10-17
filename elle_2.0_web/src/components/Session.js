import { Component } from 'react'

class Session extends Component {

render() {

	const { username, deck, time, score } = this.props
    return (
        <div className="member">
        	<h1>{username} /></h1>

        </div>
    )
}
}

export default Session
