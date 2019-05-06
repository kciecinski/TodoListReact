import React from 'react';
import {
  configure, mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoAppContainer from './TodoAppContainer';

configure({ adapter: new Adapter() });

describe('<TodoAppContainer />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      todoItems: [
      ],
      onAddItem: jest.fn(),
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    wrapper = mount(<TodoAppContainer {...props} />);
  });

  it('add Todo correctly', () => {
    wrapper.find('[type="text"]').last().simulate('change', { target: { value: 'Buy Other Stuff' } });
    wrapper.find('[type="text"]').last().simulate('keypress', { which: 13 });

    expect(wrapper.find('TodoItem')).toHaveLength(1);
    expect(wrapper.find('TodoItem .col-10').text()).toBe('Buy Other Stuff');
  });

  it('remove Todo correctly', () => {
    wrapper.find('[type="text"]').last().simulate('change', { target: { value: 'Buy Other Stuff' } });
    wrapper.find('[type="text"]').last().simulate('keypress', { which: 13 });

    wrapper.find('[type="text"]').last().simulate('change', { target: { value: 'Buy Diffrent Stuff' } });
    wrapper.find('[type="text"]').last().simulate('keypress', { which: 13 });

    wrapper.find('[label="delete"]').first().simulate('click');

    expect(wrapper.find('TodoItem')).toHaveLength(1);
    expect(wrapper.find('TodoItem .col-10').text()).toBe('Buy Diffrent Stuff');
  });

  it('sets Done correctly', () => {
    wrapper.find('[type="text"]').last().simulate('change', { target: { value: 'Buy Other Stuff' } });
    wrapper.find('[type="text"]').last().simulate('keypress', { which: 13 });

    wrapper.find('input[type="checkbox"]').simulate('click');

    expect(wrapper.find('input[type="checkbox"]').props().disabled).toBe(true);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
