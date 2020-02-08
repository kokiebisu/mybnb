import React from 'react';
import { shallow } from 'enzyme';

// Component
import Header from '../src/components/Header';

describe('Header', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
