import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import ChoreList from './ChoreList/ChoreList';

describe('<App />', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);

    expect(component).toHaveLength(1);
    expect(component.text()).toBe('Tergeo');
  });

  it('renders <ChoreList />', () => {
    const component = shallow(<App />);

    expect(component.find(ChoreList)).toHaveLength(1);
  });
});
