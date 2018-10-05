import { Component } from 'react'

class Groups extends Component {

    constructor(props) {
        super(props)
        this.state = {
            groups: [
            {
                name: "Group 01",
                decks: "Test 01",
            }
          ]
        }
    }

    render() {
    	const { groups } = this.state
        return (
            <div className="group-list">
                <h1>Groups</h1>

            </div>
        )
    }
}

export default Groups
