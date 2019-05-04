import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoList from './TodoList';

configure({ adapter: new Adapter() });

describe('<TodoList />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      todoItems: [{
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'casd',
      }, {
        completed: false,
        id: 'NJ1HBA5TN',
        text: 'casd',
      },
      ],
      removeItem: jest.fn(),
      setTodoDone: jest.fn(),
    };
    wrapper = shallow(<TodoList {...props} />);
  });

  it('renders 2 items', () => {
    expect(wrapper.find('TodoItem')).toHaveLength(2);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
