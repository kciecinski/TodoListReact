import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoItems }) {
  return (
    <>
      {todoItems.map(item => <TodoItem item={item} />) }
    </>
  );
}

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.shape({
    todoTextValue: PropTypes.string,
  })),
};
TodoList.defaultProps = {
  todoItems: [],
};

export default TodoList;
