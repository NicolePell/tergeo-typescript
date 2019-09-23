import React from 'react';
import styled from 'styled-components';

import { Body, BodyLarge, H4 } from '../Typography';
import TaskList from '../Tasks/TaskList';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px;
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
`;

const PointsLabel = styled(BodyLarge)`
  color: #7f7f7f;
  font-weight: bold;
  margin-right: 15px;
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

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 225px;
`;

const FilterLabel = styled(Body)`
  color: #a9a9a9;
`;

const MainContent = () => {
  return (
    <Container id="main-content">
      <HeaderContainer id="header-container">
        <Header>My Tasks</Header>
        <PointsContainer>
          <PointsLabel>Personal points:</PointsLabel>
          <Points>
            <PointsValue>10 points</PointsValue>
          </Points>
        </PointsContainer>
      </HeaderContainer>
      <FilterContainer id="filter-container">
        <FilterLabel>Filter: </FilterLabel>
        <FilterLabel>All</FilterLabel>
        <FilterLabel>Completed</FilterLabel>
        <FilterLabel>In Progress</FilterLabel>
      </FilterContainer>
      <TaskList />
    </Container>
  );
};

export default MainContent;
