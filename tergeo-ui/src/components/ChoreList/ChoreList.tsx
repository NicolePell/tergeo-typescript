import React from 'react';
import styled from 'styled-components';
import { H3 } from '../../Typography';

const Container = styled.div`
  background-color: yellow;
  flex: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled(H3)``;

const ChoreList = () => {
  return (
    <Container id="chore-list">
      <HeaderContainer>
        <Header>My Tasks</Header>
        <div>Personal points: 10 points</div>
      </HeaderContainer>
      <div>Filter: All Completed In Progress</div>
      <div>
        <ul>
          <li>Call Dumbledore</li>
          <li>Decide the outfit for the Yule Ball</li>
        </ul>
      </div>
    </Container>
  );
};

export default ChoreList;
