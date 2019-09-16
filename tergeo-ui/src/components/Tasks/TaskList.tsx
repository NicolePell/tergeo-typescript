import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NewTaskModal } from './NewTaskModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  align-self: stretch;
`;

const Item = styled.li``;

export const AddTaskButton = styled.button`
  background: #b9215f;
  background: linear-gradient(90deg, rgba(227, 161, 188, 1) 0%, rgba(185, 33, 95, 1) 35%, rgba(93, 11, 45, 1) 100%);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1em;
  height: 3em;
  width: 3em;
  box-shadow: 2px 2px 2px 0px rgba(20, 20, 20, 0.1);
  align-self: flex-end;
`;

export type Props = {};

export type State = {
  showModal: boolean;
};

export class TaskList extends React.PureComponent<Props, State> {
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
      <Container id="task-list">
        {showModal && <NewTaskModal />}
        <List>
          <Item>Call Dumbledore</Item>
          <Item>Decide the outfit for the Yule Ball</Item>
        </List>
        <AddTaskButton onClick={this.showModal}>
          <FontAwesomeIcon icon={faPlus} />
        </AddTaskButton>
      </Container>
    );
  }
}

export default TaskList;
