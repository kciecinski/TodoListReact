import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoItem from './TodoItem';

configure({ adapter: new Adapter() });

describe('<TodoItem />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      todoItem: {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'casd',
      },
      removeItem: jest.fn(),
      setTodoDone: jest.fn(),
    };
    wrapper = mount(<TodoItem {...props} />);
  });

  it('renders  correct text', () => {
    expect(wrapper.find('.col-10').text()).toBe('casd');
  });

  it('renders matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders undone', () => {
    expect(wrapper.find('input').props().disabled).toBe(false);
  });
});
