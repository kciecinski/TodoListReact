import React, { useReducer } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import AppLayout from '../../AppLayout';

const shortid = require('shortid');

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.item];
    case 'REMOVE_TODO':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};


export default function TodoAppContainer() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (todoItemText) => {
    dispatch({ type: 'ADD_TODO', item: { id: shortid.generate(), text: todoItemText, completed: false } });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <AppLayout>
      <TodoList todoItems={todos} removeItem={removeTodo} />
      <TodoForm addTodo={addTodo} />
    </AppLayout>
  );
}
