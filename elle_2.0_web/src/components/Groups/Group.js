import React, { Component } from 'react'


const Group = (props) => {
  const { groups } = props;
  return (
    <tr>
			<td>{groups.id}</td>
			<td>{groups.groupName}</td>
    </tr>
  );
};

export default Group
