import React from 'react';
import { shallow } from 'enzyme';

import MainContent, { AddButton } from './MainContent';
import NewTaskModal from '../Tasks/NewTaskModal';

describe('<TaskList />', () => {
  it(`opens "NewTaskModal" when "AddTaskButton" is clicked`, () => {
    const component = shallow(<MainContent />);

    expect(component.find(NewTaskModal).exists()).toBe(false);
    component.find(AddButton).simulate('click');
    expect(component.find(NewTaskModal).exists()).toBe(true);
  });
});
