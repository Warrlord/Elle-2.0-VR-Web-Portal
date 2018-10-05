import { Component } from 'react'
import Session from '../components/Session'

class Sessions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Session: [
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
    	const { Session } = this.state
        return (
            <div className="member-list">
                <h1>Sessions</h1>
                {members.map(
                	(data, i) =>
                		<Member key={i}
                				onClick={email => console.log(email)}
                				{...data} />
                	 )}
            </div>
        )
    }
}

export default Sessions
