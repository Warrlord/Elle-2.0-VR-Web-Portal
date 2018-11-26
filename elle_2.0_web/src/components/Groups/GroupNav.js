import React from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RNavLink} from 'react-router-dom';

const GroupNav = (props) => {
  const { groups, groupsPathname } = props;
  return (
    <Nav vertical>
      <NavItem>
      {
        groups.map((group) => {
        return (
            <NavLink
              key={group.id}
              to={`${groupsPathname}/${group.id}`}
              className='item'
              tag={RNavLink}
            >
              {group.name}
            </NavLink>
        )})
      }
      </NavItem>
    </Nav>
  )
};

export default GroupNav;
