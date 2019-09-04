import React from 'react';
import styled from 'styled-components';
import { Body, H4 } from '../Typography';

const Container = styled.div`
  background-color: #FFFFFF;
  flex: 0 0 11.5vw;
  padding: 0 1.5vw;
`;

const NavHeader = styled(H4)`
  color: #323232;
  font-weight: bold;
  margin: 15px 0;
  padding-bottom: 0.5vw;
  border-bottom: #c5c5c5 1px solid;
`;

const MenuItem = styled(Body)`
  color: #323232;
  margin: 15px 0;
  padding-bottom: 0.5vw;
  border-bottom: #c5c5c5 1px solid;
`;

const SideNav = () => {
  return (
    <Container id="side-nav">
      <div id="nav-groups">
        <NavHeader>Groups</NavHeader>
        <MenuItem>Hufflepuff</MenuItem>
        <MenuItem>Slytherin</MenuItem>
        <MenuItem>Ravenclaw</MenuItem>
        <MenuItem>Gryffindor</MenuItem>
        <MenuItem>+ Add new group</MenuItem>
      </div>
      <div id="nav-account">
        <NavHeader>My Account</NavHeader>
        <MenuItem>Tasks</MenuItem>
        <MenuItem>Rewards</MenuItem>
        <MenuItem>Settings</MenuItem>
      </div>
    </Container>
  );
};

export default SideNav;
