import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'mdbreact';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoItems, removeItem, setTodoDone }) {
  return (
    <ListGroup>
      {todoItems.map(item => (
        <TodoItem
          key={item.id}
          todoItem={item}
          removeItem={removeItem}
          setTodoDone={setTodoDone}
        />
      )) }
    </ListGroup>
  );
}

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.shape({
    todoTextValue: PropTypes.string,
  })),
  removeItem: PropTypes.func.isRequired,
  setTodoDone: PropTypes.func.isRequired,
};
TodoList.defaultProps = {
  todoItems: [],
};

export default TodoList;
