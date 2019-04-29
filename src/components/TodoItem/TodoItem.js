import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem({ todoItem }) {
  return (
    <div>
      {todoItem.textValue}
    </div>
  );
}

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    todoItem: PropTypes.string,
  }).isRequired,
};
