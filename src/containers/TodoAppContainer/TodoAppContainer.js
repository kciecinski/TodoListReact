import React, { useReducer } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';
import AppLayout from '../../AppLayout';

const shortid = require('shortid');

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
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

  const addItem = (todoItemText) => {
    dispatch({ type: 'ADD_TODO', payload: { id: shortid.generate(), text: todoItemText, completed: false } });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  const setItemCompleted = (id) => {
    dispatch({ type: 'SET_DONE', id });
  };

  return (
    <AppLayout>
      <TodoList
        todoItems={todos}
        onRemoveItem={removeTodo}
        onSetItemCompleted={setItemCompleted}
      />
      <TodoForm onAddItem={addItem} />
    </AppLayout>
  );
}
