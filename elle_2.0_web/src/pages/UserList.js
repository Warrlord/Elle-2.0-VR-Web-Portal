import { Component } from 'react'
import User from '../components/User'

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    render() {
    	const { users } = this.state
        return (
            <div className="user-list">
                <h1>Users</h1>
                {users.map(
                	(users, i) =>
                		<users key={i}
                				onClick={email => console.log(email)}
                				{...data} />
                	 )}
            </div>
        )
    }
}

export default UserList
