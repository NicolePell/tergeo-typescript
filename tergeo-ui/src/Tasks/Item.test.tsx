import React from 'react';
import { shallow } from 'enzyme';

import Item, { Description } from './Item';

describe('<Item />', () => {
  const defaultProps = {
    description: 'Call Dumbledore',
    completed: false,
  };

  it('displays description', () => {
    const component = shallow(<Item {...defaultProps} completed={true} />);

    expect(component.find(Description).text()).toBe('CALL DUMBLEDORE');
  });
});
