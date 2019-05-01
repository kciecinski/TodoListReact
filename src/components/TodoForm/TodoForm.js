import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FABButton, Icon, Textfield } from 'react-mdl';

export default function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');
  const inputEl = useRef(null);

  const submitForm = (text) => {
    addTodo(text);
    setTodoText('');
    inputEl.current.inputRef.value = '';
  };

  return (
    <div>
      <Textfield style={{ width: '100%' }} ref={inputEl} label="Add Tasks" onChange={e => setTodoText(e.target.value)} />
      <FABButton style={{ float: 'right' }} aria-label="Add" onClick={() => submitForm(todoText)} type="submit" colored ripple>
        <Icon name="add" />
      </FABButton>
    </div>
  );
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
