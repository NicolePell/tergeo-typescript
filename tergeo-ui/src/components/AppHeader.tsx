import React from 'react';
import styled from 'styled-components';

import { H4, H5 } from '../Typography';

const Container = styled.div`
  background-color: #4d4d4d;
  color: #fff;
  padding: 12px 0;
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 15px;
`;

const Logo = styled(H4)`
  margin: 0;
  font-weight: bold;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled(H5)`
  margin: 0 0 0 20px;
`;

const AppHeader = () => {
  return (
    <Container id="app-header">
      <Menu>
        <Logo>Tergeo</Logo>
        <Nav>
          <NavItem>Sign In</NavItem>
          <NavItem>Sign Up</NavItem>
        </Nav>
      </Menu>
    </Container>
  );
};

export default AppHeader;
