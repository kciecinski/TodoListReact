import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBListGroupItem, MDBCol, MDBRow, MDBIcon,
} from 'mdbreact';
import Checkbox from '@material/react-checkbox';

const getItemStyles = (isCompleted) => {
  if (isCompleted) {
    return {
      backgroundColor: '#bbb',
      opacity: '0.5',
      marginTop: '1.5em',
    };
  }
  return {
    marginTop: '1.5em',
  };
};

export default function TodoItem({ todoItem, onRemoveItem, onSetItemCompleted }) {
  const isCompleted = todoItem.completed;

  return (
    <MDBListGroupItem style={{ ...getItemStyles(isCompleted) }}>
      <MDBRow>
        <MDBCol className="todo_items_left" size="10" middle>
          {todoItem.text}
        </MDBCol>
        <MDBCol size="2" className="todo_items_right">
          <Checkbox type="checkbox" onClick={() => onSetItemCompleted(todoItem.id)} disabled={isCompleted} />
          <MDBIcon
            size="2x"
            className="red-text remove_icon"
            label="delete"
            name="delete"
            aria-label="Remove"
            onClick={() => onRemoveItem(todoItem.id)}
            icon="trash"
          />
        </MDBCol>
      </MDBRow>
    </MDBListGroupItem>
  );
}

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
  onRemoveItem: PropTypes.func.isRequired,
  onSetItemCompleted: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  todoItem: {},
};
