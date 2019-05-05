import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBListGroupItem, MDBCol, MDBRow, MDBIcon,
} from 'mdbreact';
import Checkbox from '@material/react-checkbox';


export default function TodoItem({ todoItem, removeItem, setTodoDone }) {
  const doneStyles = () => {
    if (todoItem.completed) {
      return {
        backgroundColor: '#bbb',
        opacity: '0.5',
      };
    }
    return {};
  };


  return (
    <MDBListGroupItem style={{ ...doneStyles(), marginTop: '10px' }}>
      <MDBRow>
        <MDBCol size="10" style={{ display: 'flex', alignItems: 'center' }}>
          {todoItem.text}
        </MDBCol>
        <MDBCol size="2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Checkbox type="checkbox" onClick={() => setTodoDone(todoItem.id)} disabled={todoItem.completed} />
          <MDBIcon style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} size="2x" className="red-text" label="delete" name="delete" aria-label="Remove" onClick={() => removeItem(todoItem.id)} icon="trash" />
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
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  setTodoDone: PropTypes.func.isRequired,
};
