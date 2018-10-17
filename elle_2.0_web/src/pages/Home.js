import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import NavMenu from '../components/NavMenu'

const Home = (props) => {
  return (
    <div>
    <NavMenu />
      <Jumbotron>
        <h1 className="display-3">Welcome to Elle 2.0 VR Website!</h1>
        <p className="lead">This is a project to help students and teachers learn how to better understand </p>
        <hr className="my-2" />
        <p>Welcome to the Website and the team hopes for all the best in your second language learning process.</p>
        <p className="lead">
          <Button color="primary">Signup</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
