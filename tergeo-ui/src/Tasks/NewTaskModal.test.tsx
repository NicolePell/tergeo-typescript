import React from 'react';
import { shallow } from 'enzyme';

import {
  NewTaskModal,
  InputField,
  NewForm,
  mapDispatchToProps,
} from './NewTaskModal';

jest.mock('./actions');
import { createTask } from './actions';

describe('<NewTaskModal />', () => {
  const props = {
    createTask: jest.fn(),
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

  it(`calls "createTask" with task details when "AddTaskButton" is clicked`, () => {
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

    expect(props.createTask).toBeCalledWith({
      description: description,
      completed: false,
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
      expect(createTask).toBeCalledWith(task);
    });
  });
});
