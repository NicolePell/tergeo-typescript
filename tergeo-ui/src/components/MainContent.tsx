import React from 'react';
import styled from 'styled-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Body, BodyLarge, H4 } from '../Typography';
import TaskList from '../Tasks/TaskList';
import NewTaskModal from '../Tasks/NewTaskModal';

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

export const AddButton = styled.button`
  align-self: flex-end;
  background: #b9215f;
  background: linear-gradient(
    90deg,
    rgba(227, 161, 188, 1) 0%,
    rgba(185, 33, 95, 1) 35%,
    rgba(93, 11, 45, 1) 100%
  );
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1em;
  height: 3em;
  width: 3em;
  box-shadow: 2px 2px 2px 0 rgba(20, 20, 20, 0.1);
`;

type State = {
  showModal: boolean;
};

class MainContent extends React.PureComponent {
  state: State = {
    showModal: false,
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  render() {
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
        {this.state.showModal && <NewTaskModal />}
        <AddButton onClick={this.showModal}>
          <FontAwesomeIcon icon={faPlus} />
        </AddButton>
      </Container>
    );
  }
}

export default MainContent;
