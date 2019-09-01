import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';

describe('<App />', () => {
  it('renders <AppHeader />', () => {
    const component = shallow(<App />);

    expect(component.find(AppHeader)).toHaveLength(1);
  });

  it('renders the <SideNav />', () => {
    const component = shallow(<App />);

    expect(component.find(SideNav)).toHaveLength(1);
  });
});
