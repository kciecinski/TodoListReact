import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem, ListItemContent, ListItemAction, IconButton, Checkbox,
} from 'react-mdl';

export default function TodoItem({ todoItem, removeItem }) {
  return (
    <ListItem>
      <ListItemContent>{todoItem.text}</ListItemContent>
      <ListItemAction>
        <Checkbox label="Done" />
        <IconButton label="Remove" colored accent name="remove" aria-label="Remove" type="button" onClick={() => removeItem(todoItem.id)} />
      </ListItemAction>
    </ListItem>
  );
}

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};
