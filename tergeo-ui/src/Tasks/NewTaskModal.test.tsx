import React from 'react';
import { shallow } from 'enzyme';

import {
  NewTaskModal,
  InputField,
  NewForm,
  mapDispatchToProps,
  mapStateToProps,
  Props,
  ErrorMessage,
} from './NewTaskModal';

jest.mock('./actions');
import { createTaskAction } from './actions';
import { TaskState } from './reducer';

describe('<NewTaskModal />', () => {
  const defaultProps: Props = {
    createTaskComplete: false,
    createTaskError: false,
    createTask: jest.fn(),
  };

  it('prevent default form submission', () => {
    const preventDefault = jest.fn();
    const component = shallow(<NewTaskModal {...defaultProps} />);

    component.find(NewForm).simulate('submit', {
      preventDefault,
      target: {
        description: { value: '' },
        completed: false,
      },
    });

    expect(preventDefault).toBeCalled();
  });

  it(`calls "createTask" with task details when "AddTaskButton" is clicked`, () => {
    const preventDefault = jest.fn();
    const description = 'Call Dumbledore';

    const component = shallow(<NewTaskModal {...defaultProps} />);
    component.find(InputField).simulate('change', { value: description });
    component.find(NewForm).simulate('submit', {
      preventDefault,
      target: {
        description: { value: description },
        completed: false,
      },
    });

    expect(defaultProps.createTask).toBeCalledWith({
      description: description,
      completed: false,
    });
  });

  it('hides errorMessage if createTaskError is false', () => {
    const createTaskError = false;

    const component = shallow(
      <NewTaskModal {...defaultProps} createTaskError={createTaskError} />
    );

    expect(component.find(ErrorMessage).exists()).toBe(false);
  });

  it('shows error if createTaskError is true', () => {
    const createTaskError = true;

    const component = shallow(
      <NewTaskModal {...defaultProps} createTaskError={createTaskError} />
    );

    expect(component.find(ErrorMessage).exists()).toBe(true);
  });

  describe('mapStateToProps', () => {
    it('pulls data from the redux state', () => {
      const initialState: TaskState = {
        tasks: [],
        createTaskError: false,
        createTaskComplete: false,
      };

      const props = mapStateToProps(initialState);

      expect(props).toEqual({
        createTaskError: initialState.createTaskError,
        createTaskComplete: initialState.createTaskComplete,
      });
    });
  });

  describe('mapDispatchToProps', () => {
    it('creates createTask action', () => {
      const dispatch = jest.fn();
      const task = {
        description: 'Call Dumbledore',
        completed: false,
      };

      mapDispatchToProps(dispatch).createTask(task);

      expect(dispatch).toBeCalled();
      expect(createTaskAction).toBeCalledWith(task);
    });
  });
});
