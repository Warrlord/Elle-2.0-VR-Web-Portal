import { PropTypes, Component } from 'react'

export class Profile extends Component {

	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()
		console.log('username', this.refs.username.value)
		console.log('email', this.refs.email.value)
		console.log('playername', this.refs.playername.value)
		console.log('password', this.refs.password.value)

	}

	render() {

		const { username, email, playername, password } = this.props

		return (
			<form onSubmit={this.submit} className="profile-edit">

				<label htmlFor="username">Username</label>
				<input id="username"
					   type="text"
					   required
					   defaultValue={username}
					   ref="username"/>

				<label htmlFor="email">Email</label>
				<input id="email"
					   type="email"
					   required
					   defaultValue={email}
					   ref="email"/>

			  <label htmlFor="playername">Player Name</label>
 			 	<input id="playername"
 					   type="playername"
 					   required
 					   defaultValue={playername}
 					   ref="playername"/>

				<label htmlFor="password">Password</label>
 				<input id="password"
 					   type="password"
 					   required
 					   defaultValue={password}
 					   ref="password"/>


				<button>Save Changes</button>
			</form>
		)
	}
}

Profile.defaultProps = {
	username: "User 1",
	email: "User@me.com",
	playername: "Player 1",
	password: "pass"
}


Profile.propTypes = {
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	playername: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired
}
