import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import NewTaskModal from './NewTaskModal';

const Container = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;

const List = styled.ul``;

const Item = styled.li``;

export const AddButton = styled.button`
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

export type Props = {};

export type State = {
  showModal: boolean;
};

class TaskList extends React.PureComponent<Props, State> {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container id="task-list-container">
        {showModal && <NewTaskModal />}
        <List>
          <Item>Call Dumbledore</Item>
          <Item>Decide the outfit for the Yule Ball</Item>
        </List>
        <AddButton onClick={this.showModal}>
          <FontAwesomeIcon icon={faPlus} />
        </AddButton>
      </Container>
    );
  }
}

export default TaskList;
