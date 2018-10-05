import { Component } from 'react'

class User extends Component {

render() {

	const { username, email, admin, makeAdmin } = this.props
    return (
        <div className="member">
        	<h1>{username}</h1>
        	<a onClick={makeAdmin}>Make Admin</a>
        	<p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
    )
}
}

export default User
