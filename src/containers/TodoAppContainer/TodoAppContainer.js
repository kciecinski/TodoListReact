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
    case 'SET_DONE':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: true };
        }
        return item;
      });
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

  const setTodoDone = (id) => {
    dispatch({ type: 'SET_DONE', id });
  };

  return (
    <AppLayout>
      <TodoList todoItems={todos} removeItem={removeTodo} setTodoDone={setTodoDone} />
      <TodoForm addTodo={addTodo} />
    </AppLayout>
  );
}
