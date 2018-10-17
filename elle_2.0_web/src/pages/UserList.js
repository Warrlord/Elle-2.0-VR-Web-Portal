import { Component } from 'react'
import User from '../components/User'

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
            {
                name: "Joe Wilson",
                email: "joe.wilson@example.com",
            },
            {
                name: "Stacy Gardner",
                email: "stacy.gardner@example.com",
            },
            {
                name: "Billy Young",
                email: "billy.young@example.com",
            }
          ]
        }
    }

    render() {
    	const { users } = this.state
        return (
            <div className="user-list">
                <h1>Users</h1>
                {users.map(
                	(data, i) =>
                		<Member key={i}
                				onClick={email => console.log(email)}
                				{...data} />
                	 )}
            </div>
        )
    }
}

export default UserList
