import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoList from './TodoList';

configure({ adapter: new Adapter() });

describe('<TodoList />', () => {
  it('renders correct number of items', () => {
    const props = {
      todoItems: [{
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'Buy Apple',
      }, {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'Buy Banana nana nana',
      },
      ],
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    const wrapper = shallow(<TodoList {...props} />);

    expect(wrapper.find('TodoItem')).toHaveLength(2);
  });

  it('renders correctly with default props', () => {
    const wrapper = shallow(<TodoList />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
