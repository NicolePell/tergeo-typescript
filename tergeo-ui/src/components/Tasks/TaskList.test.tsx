import React from 'react';
import { shallow } from 'enzyme';

import TaskList, { AddTaskButton } from './TaskList';
import { NewTaskModal } from './NewTaskModal';

describe('<TaskList />', () => {
  it(`opens "NewTaskModal" when "AddTaskButton" is clicked`, () => {
    const component = shallow(<TaskList />);

    expect(component.find(NewTaskModal).exists()).toBe(false);
    component.find(AddTaskButton).simulate('click');
    expect(component.find(NewTaskModal).exists()).toBe(true);
  });
});
