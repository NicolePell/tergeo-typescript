import React from 'react';
import styled from 'styled-components';
import { Body, BodyLarge, H4 } from '../../Typography';

const Container = styled.div`
  background-color: #fafafa;
  flex: 1;
  flex-direction: row;
  padding-left: 25px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled(H4)`
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

const PointsLabel = styled(BodyLarge)`
  margin-right: 15px;
  color: #7f7f7f;
  font-weight: bold;
`;

const Points = styled.div`
  background-color: #84cfdf;
  display: flex;
  border-radius: 6px;
  padding: 2px 6px;
  margin: 0;
`;

const PointsValue = styled(Body)`
  color: #505657;
  margin: 0;
  padding: 0 2px;
  line-height: 25px;
  font-weight: bold;
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
