import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

export default function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');
  const inputEl = useRef(null);

  const submitForm = (text) => {
    if (text !== '') {
      addTodo(text);
      setTodoText('');
      if (inputEl.current) inputEl.current.state.innerValue = '';
    }
  };

  const handleKey = (e) => {
    if (e.which === 13) {
      submitForm(todoText);
    }
  };

  return (
    <div>
      <MDBInput
        onKeyPress={handleKey}
        size="lg"
        ref={inputEl}
        label="Add Tasks"
        onChange={e => setTodoText(e.target.value)}
      />
      <MDBBtn style={{ float: 'right', borderRadius: '100%', padding: '25px' }} color="pink" aria-label="Add" onClick={() => submitForm(todoText)} type="submit">
        <MDBIcon icon="plus" size="2x" />
      </MDBBtn>
    </div>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
