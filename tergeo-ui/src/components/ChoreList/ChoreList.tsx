import React from 'react';
import styled from 'styled-components';
import { BodyLarge, H3 } from '../../Typography';

const Container = styled.div`
  background-color: #fafafa;
  flex: 1;
  flex-direction: row;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled(H3)`
  color: #5b939c;
`;

const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-right: 10px;
`;

const PointsLabel = styled.div`
  margin-right: 15px;
`;

const Points = styled.div`
  background-color: #84CFDF;
  display: flex;
  border-radius: 6px;
  padding: 2px 6px;
  margin: 0;
`;

const PointsValue = styled(BodyLarge)`
  margin: 0;
`;

const ChoreList = () => {
  return (
    <Container id="chore-list">
      <HeaderContainer>
        <Header>My Tasks</Header>
        <PointsContainer>
          <PointsLabel>Personal points:</PointsLabel>
          <Points>
            <PointsValue>10 points</PointsValue>
          </Points>
        </PointsContainer>
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
