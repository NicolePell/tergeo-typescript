import React from 'react';
import styled from 'styled-components';
import { State, Task } from '../types';
import { connect } from 'react-redux';

import Item from './Item';

const Container = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;

export type StateProps = {
  tasks: Task[];
};

export class TaskList extends React.PureComponent<StateProps> {
  render() {
    const { tasks } = this.props;
    return (
      <Container id="task-list-container">
        {tasks.length ? (
          tasks.map(task => {
            return <Item />;
          })
        ) : (
          <p>You have no tasks! Create some now...</p>
        )}
      </Container>
    );
  }
}

export const mapStateToProps = (state: State): StateProps => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
