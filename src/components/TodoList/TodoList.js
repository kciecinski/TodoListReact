import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'mdbreact';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoItems, onRemoveItem, onSetItemCompleted }) {
  return (
    <ListGroup>
      {todoItems.map(item => (
        <TodoItem
          key={item.id}
          todoItem={item}
          onRemoveItem={onRemoveItem}
          onSetItemCompleted={onSetItemCompleted}
        />
      )) }
    </ListGroup>
  );
}

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.shape({
    todoTextValue: PropTypes.string,
  })),
  onRemoveItem: PropTypes.func.isRequired,
  onSetItemCompleted: PropTypes.func.isRequired,
};
TodoList.defaultProps = {
  todoItems: [],
};

export default TodoList;
