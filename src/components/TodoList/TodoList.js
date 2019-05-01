import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'react-mdl';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoItems, removeItem }) {
  return (
    <List>
      {todoItems.map(item => <TodoItem key={item.id} todoItem={item} removeItem={removeItem} />) }
    </List>
  );
}

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.shape({
    todoTextValue: PropTypes.string,
  })),
  removeItem: PropTypes.func.isRequired,
};
TodoList.defaultProps = {
  todoItems: [],
};

export default TodoList;
