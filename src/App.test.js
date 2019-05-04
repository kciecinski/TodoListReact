import React from 'react';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
