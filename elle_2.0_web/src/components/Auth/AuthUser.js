import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class AuthUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: 3000,
      perm: undefined

    };
  }

//  componentDidMount() {
//    const jwt = localStorage.getItem('jwt');;
//    if(!jwt) {
//      this.props.history.push('/login');
//    }
//
//    axios.get('/getUser/', { headers: { Authorization: 'user ${jwt}' } }).then(res => this.setState({
//      userID: res.data,
//      permission: res.data
//    })).catch(err => {
//      localStorage.removeItem('jwt')
//      this.props.history.push('/login');
//    });
//  }

  render () {
//    if(this.state.user == undefined){
//      return (
//        <div><h1>Loading...</h1></div>
//      );
//    }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(AuthUser);
