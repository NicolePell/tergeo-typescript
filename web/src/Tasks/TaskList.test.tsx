import React from 'react';
import { shallow } from 'enzyme';

import Item from './Item';
import { mapDispatchToProps, mapStateToProps, TaskList } from './TaskList';
import { TaskState } from './reducer';

describe('<TaskList />', () => {
  const tasks = [
    {
      description: 'Call Dumbledore',
      completed: false,
    },
    {
      description: 'Decide outfit for the Yule Ball',
      completed: false,
    },
  ];

  const defaultProps = {
    tasks,
    fetchTasks: () => {},
  };

  it(`renders a message to create tasks if none exist yet`, () => {
    const component = shallow(<TaskList {...defaultProps} tasks={[]} />);

    expect(component.text()).toContain('You have no tasks! Create some now...');
  });

  it(`renders TaskItem for each task, and does not render 'no tasks' message`, () => {
    const component = shallow(<TaskList {...defaultProps} />);

    expect(component.find(Item).length).toBe(2);
    expect(component.text()).not.toContain(
      'You have no tasks! Create some now...'
    );
  });

  it('calls fetchTasks on mount', () => {
    const fetchTasks = jest.fn();

    shallow(<TaskList {...defaultProps} fetchTasks={fetchTasks} />);

    expect(fetchTasks).toBeCalled();
  });

  describe('mapStateToProps', () => {
    it('pulls tasks from redux state', () => {
      const initialState: TaskState = {
        tasks,
        createTaskError: false,
        createTaskComplete: false,
      };

      const props = mapStateToProps({ tasks: initialState });

      expect(props).toEqual({ tasks });
    });
  });

  describe('mapDispatchToProps', () => {
    it('creates fetchTasks action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).fetchTasks();

      expect(dispatch).toBeCalled();
    });
  });
});
