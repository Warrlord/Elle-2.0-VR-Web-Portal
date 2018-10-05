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
                thumbnail: "https://randomuser.me/api/portraits/men/53.jpg"
            },
            {
                name: "Stacy Gardner",
                email: "stacy.gardner@example.com",
                thumbnail: "https://randomuser.me/api/portraits/women/74.jpg"
            },
            {
                name: "Billy Young",
                email: "billy.young@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/34.jpg"
            }
          ]
        }
    }

    render() {
    	const { users } = this.state
        return (
            <div className="user-list">
                <h1>Society Members</h1>
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
