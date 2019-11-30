import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components';

import { TaskDetails } from '../types';
import { createTaskAction } from './actions';

export const NewForm = styled.form``;

export const InputField = styled.input``;

export const ConfirmButton = styled.button`
  background: #b9215f;
  color: white;
`;

export const ErrorMessage = styled.h5`
  color: red;
`;

export type StateProps = {
  createTaskComplete: boolean;
  createTaskError: boolean;
};

export type DispatchProps = {
  createTask: (task: TaskDetails) => void;
};

export type Props = StateProps & DispatchProps;

export class NewTaskModal extends React.PureComponent<Props> {
  saveTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.createTask({
      // @ts-ignore
      description: event.target.description.value,
      completed: false,
    });
  };

  render() {
    return (
      <div>
        <h1>Add a new Task</h1>
        <NewForm onSubmit={this.saveTask}>
          <InputField placeholder="Task name" name="description" />
          <ConfirmButton type="submit">Confirm</ConfirmButton>
          <a href="/">Cancel</a>
        </NewForm>
        {this.props.createTaskError && (
          <ErrorMessage>Sorry, we were unable to create your task</ErrorMessage>
        )}
      </div>
    );
  }
}

export const mapStateToProps = ({
  createTaskComplete,
  createTaskError,
}: {
  createTaskComplete: boolean;
  createTaskError: boolean;
}): StateProps => ({
  createTaskComplete,
  createTaskError,
});

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  createTask: task => dispatch(createTaskAction(task)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTaskModal);
