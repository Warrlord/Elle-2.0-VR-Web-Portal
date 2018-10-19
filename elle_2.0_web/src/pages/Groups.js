import React from 'react';


export default class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      Groups: [
        {
          id: 1,
          name: "Test Deck",
          author: "Mark",
          cardnum: "1",
        },
        {
          id: 2,
          name: "Test Deck 02",
          author: "Sam",
          cardnum: "3",
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h3>Groups:</h3>
      </div>
    );
  }
}
