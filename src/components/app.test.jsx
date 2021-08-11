import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { TestExports } from './App';

configure({ adapter: new Adapter() });

describe('Test suite for app', () => {
  it('Check if layout is rendered', () => {
    const wrapper = shallow(<TestExports.App />);
  });
});
