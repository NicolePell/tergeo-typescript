import React from 'react';
import { shallow } from 'enzyme';

import {
  NewTaskModal,
  InputField,
  NewForm,
  mapDispatchToProps,
} from './NewTaskModal';

jest.mock('./actions');
import { createTaskAction } from './actions';

describe('<NewTaskModal />', () => {
  const props = {
    saveTask: jest.fn(),
  };

  it('prevent default form submission', () => {
    const preventDefault = jest.fn();
    const component = shallow(<NewTaskModal {...props} />);

    component.find(NewForm).simulate('submit', {
      preventDefault,
      target: {
        description: { value: '' },
        completed: false,
      },
    });

    expect(preventDefault).toBeCalled();
  });

  it(`calls "saveTask" with task details when "AddTaskButton" is clicked`, () => {
    const preventDefault = jest.fn();
    const description = 'Call Dumbledore';

    const component = shallow(<NewTaskModal {...props} />);
    component.find(InputField).simulate('change', { value: description });
    component.find(NewForm).simulate('submit', {
      preventDefault,
      target: {
        description: { value: description },
        completed: false,
      },
    });

    expect(props.saveTask).toBeCalledWith({
      description: description,
      completed: false,
    });
  });

  describe('mapDispatchToProps', () => {
    it('creates saveTask action', () => {
      const dispatch = jest.fn();
      const task = {
        description: 'Call Dumbledore',
        completed: false,
      };

      mapDispatchToProps(dispatch).saveTask(task);

      expect(dispatch).toBeCalled();
      expect(createTaskAction).toBeCalledWith(task);
    });
  });
});
