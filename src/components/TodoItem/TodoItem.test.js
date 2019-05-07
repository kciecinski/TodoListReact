import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoItem from './TodoItem';

configure({ adapter: new Adapter() });

describe('<TodoItem />', () => {
  it('renders correct text', () => {
    const props = {
      todoItem: {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'Buy Oranges and Apples',
      },
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    const wrapper = shallow(<TodoItem {...props} />);

    expect(wrapper.find('.todo_items_left').children().text()).toBe('Buy Oranges and Apples');
  });

  it('renders item as uncompleted', () => {
    const props = {
      todoItem: {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'Buy Oranges and Apples',
      },
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    const wrapper = shallow(<TodoItem {...props} />);
    expect(wrapper.find('ListGroupItem').prop('style')).not.toHaveProperty('backgroundColor');
  });

  it('renders item as completed with completed:true props', () => {
    const props = {
      todoItem: {
        completed: true,
        id: 'NJ1HBA5TN',
        text: 'Buy Oranges and Apples',
      },
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    const wrapper = shallow(<TodoItem {...props} />);
    expect(wrapper.find('ListGroupItem').prop('style')).toHaveProperty('backgroundColor', '#bbb');
  });


  it('onSetItemCompleted is called when checkbox is clicked', () => {
    const props = {
      todoItem: {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'Buy Oranges and Apples',
      },
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    const wrapper = shallow(<TodoItem {...props} />);

    wrapper.find('RippledComponent').simulate('click');

    expect(props.onSetItemCompleted).toHaveBeenCalledWith(props.todoItem.id);
  });

  it('onRemoveItem is called when remove icon is clicked', () => {
    const props = {
      todoItem: {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'Buy Oranges and Apples',
      },
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    const wrapper = shallow(<TodoItem {...props} />);

    wrapper.find('Fa.remove_icon').simulate('click');

    expect(props.onRemoveItem).toHaveBeenCalledWith(props.todoItem.id);
  });

  it('renders correctly with default props', () => {
    const wrapper = shallow(<TodoItem />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const props = {
      todoItem: {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'Buy Oranges and Apples',
      },
      onRemoveItem: jest.fn(),
      onSetItemCompleted: jest.fn(),
    };
    const wrapper = shallow(<TodoItem {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
