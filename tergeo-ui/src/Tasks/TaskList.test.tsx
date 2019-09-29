import React from 'react';
import { shallow } from 'enzyme';

import { State } from '../types';
import { mapStateToProps, TaskList } from './TaskList';
import Item from './Item';

describe('<TaskList />', () => {
  it(`renders a message to create tasks if none exist yet`, () => {
    const component = shallow(<TaskList tasks={[]} />);

    expect(component.text()).toContain("You have no tasks! Create some now...");
  });

  it(`renders TaskItem for each task, and does not render 'no tasks' message`, () => {
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
    const component = shallow(<TaskList tasks={tasks} />);

    expect(component.find(Item).length).toBe(2);
    expect(component.text()).not.toContain("You have no tasks! Create some now...");
  });

  describe('mapStateToProps', () => {
    it('pulls tasks from redux state', () => {
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

      const initialState: State = {
        tasks,
        createTaskError: false,
        createTaskComplete: false,
      };

      const props = mapStateToProps(initialState);

      expect(props).toEqual({ tasks });
    });
  });
});
