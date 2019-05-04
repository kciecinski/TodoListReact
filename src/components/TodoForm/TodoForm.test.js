import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import TodoForm from './TodoForm';

configure({ adapter: new Adapter() });

describe('<TodoForm />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      addTodo: jest.fn(),
    };
    wrapper = shallow(<TodoForm {...props} />);
  });

  it('calls addTodo correctly on click', () => {
    wrapper.find('Input').simulate('change', { target: { value: 'Buy Stuff' } });
    wrapper.find('Button').simulate('click');

    expect(props.addTodo).toHaveBeenCalledWith('Buy Stuff');
  });

  it('dont calls addTodo when empty', () => {
    wrapper.find('Button').simulate('click');

    expect(props.addTodo).not.toHaveBeenCalledWith('Buy Stuff');
  });

  it('calls addTodo correctly on keypress', () => {
    wrapper.find('Input').simulate('change', { target: { value: 'Buy Other Stuff' } });
    wrapper.find('Input').simulate('keypress', { which: 13 });

    expect(props.addTodo).toHaveBeenCalledWith('Buy Other Stuff');
  });

  it('renders matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
