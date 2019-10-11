import React from 'react';
import styled from 'styled-components';
import { Task } from '../types';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import Item from './Item';
import { fetchAllTasksAction } from './actions';
import { TaskState } from './reducer';

const Container = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;

export type StateProps = {
  tasks: Task[];
};

export type DispatchProps = {
  fetchTasks: () => void;
};

export class TaskList extends React.PureComponent<StateProps & DispatchProps> {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks } = this.props;

    return (
      <Container id="task-list-container">
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <Item
                key={index}
                description={task.description}
                completed={task.completed}
              />
            );
          })
        ) : (
          <p>You have no tasks! Create some now...</p>
        )}
      </Container>
    );
  }
}

export const mapStateToProps = ({
  tasks,
}: {
  tasks: TaskState;
}): StateProps => ({
  tasks: tasks.tasks,
});

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  fetchTasks: () => dispatch(fetchAllTasksAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
