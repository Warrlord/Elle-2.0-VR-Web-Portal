import React from 'react';
import { NavLink as RNavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Template extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand to="/sessions" tag={RNavLink}>Elle VR</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/groups" tag={RNavLink}>Groups</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/decks" tag={RNavLink}>Decks</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/profile" tag={RNavLink}>Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/sessions" tag={RNavLink}>Sessions</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/login" tag={RNavLink}>Sign Out</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
