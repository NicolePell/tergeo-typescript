import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components';

import { Task } from '../types';
import { createTaskAction } from './actions';

export const NewForm = styled.form``;

export const InputField = styled.input``;

export const ConfirmButton = styled.button`
  background: #b9215f;
  color: white;
`;

export type DispatchProps = {
  saveTask: (task: Task) => void;
};

export class NewTaskModal extends React.PureComponent<DispatchProps> {
  saveTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.saveTask({
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
      </div>
    );
  }
}

export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  saveTask: task => dispatch(createTaskAction(task)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(NewTaskModal);
