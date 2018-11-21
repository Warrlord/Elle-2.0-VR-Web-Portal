import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">This is a simple message to new users.</p>
        <hr className="my-2" />
        <p>Helpful Information will be added soon!</p>
        <p className="lead">
          <Button color="primary" href="/login">Login</Button>
          <Button color="info" href="/signup">Signup</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
