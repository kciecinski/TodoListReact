import React from 'react';
import {
  configure, mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoAppContainer from './TodoAppContainer';

configure({ adapter: new Adapter() });

const addItem = (wrapper) => {
  wrapper.find('[type="text"]').last().simulate('change', { target: { value: 'Buy Some Stuff' } });
  wrapper.find('[type="text"]').last().simulate('keypress', { which: 13 });
};

describe('<TodoAppContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TodoAppContainer />);
  });

  it('add item correctly', () => {
    wrapper.find('[type="text"]').last().simulate('change', { target: { value: 'Buy Other Stuff' } });
    wrapper.find('[type="text"]').last().simulate('keypress', { which: 13 });

    expect(wrapper.find('TodoItem')).toHaveLength(1);
  });

  it('remove item correctly', () => {
    addItem(wrapper);
    addItem(wrapper);
    wrapper.find('[label="delete"]').first().simulate('click');

    expect(wrapper.find('TodoItem')).toHaveLength(1);
  });

  it('sets checkbox disable after checkbox is clicked', () => {
    addItem(wrapper);
    wrapper.find('input[type="checkbox"]').simulate('click');

    expect(wrapper.find('input[type="checkbox"]').props().disabled).toBe(true);
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
