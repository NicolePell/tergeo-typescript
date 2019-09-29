import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;

const List = styled.ul``;

const Item = styled.li``;

export type Props = {};

export type State = {
  showModal: boolean;
};

class TaskList extends React.PureComponent<Props, State> {
  render() {
    return (
      <Container id="task-list-container">
        <List>
          <Item>Call Dumbledore</Item>
          <Item>Decide the outfit for the Yule Ball</Item>
        </List>
      </Container>
    );
  }
}

export default TaskList;
