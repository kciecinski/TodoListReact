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
      onAddItem: jest.fn(),
    };
    wrapper = shallow(<TodoForm {...props} />);
  });

  it('calls onAddItem correctly on click', () => {
    wrapper.find('Input').simulate('change', { target: { value: 'Buy Stuff' } });
    wrapper.find('Button').simulate('click');

    expect(props.onAddItem).toHaveBeenCalledWith('Buy Stuff');
  });

  it('dont calls onAddItem when empty', () => {
    wrapper.find('Button').simulate('click');

    expect(props.onAddItem).not.toHaveBeenCalledWith('Buy Stuff');
  });

  it('calls onAddItem correctly on pressing enter', () => {
    wrapper.find('Input').simulate('change', { target: { value: 'Buy Other Stuff' } });
    wrapper.find('Input').simulate('keypress', { which: 13 });

    expect(props.onAddItem).toHaveBeenCalledWith('Buy Other Stuff');
  });

  it('renders correctly with defoult props', () => {
    const defoultWrapper = shallow(<TodoForm />);
    expect(toJson(defoultWrapper)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
