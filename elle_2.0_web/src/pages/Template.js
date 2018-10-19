import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, PageHeader } from 'react-bootstrap';

export default class Template extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Elle VR</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/Groups">
              Groups
            </NavItem>
            <NavItem eventKey={2} href="/Decks">
              Decks
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Profile</MenuItem>
              <MenuItem eventKey={3.2}>Sessions</MenuItem>
              <MenuItem eventKey={3.3}>UserList</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Sign out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
        <PageHeader>
          Welcome to Elle VR Website "Username"
        </PageHeader>
      </div>
    );
  }
}
