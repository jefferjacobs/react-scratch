import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import { ToDo } from '../../interfaces/ToDos';

function ToDosLocal() {

  const initialToDos: ToDo[] = [
    {
      value: 'Clean the kitchen',
      done: false
    },
    {
      value: 'Wash the car',
      done: true
    }
  ];

  const [todos, setTodos] = useState<ToDo[]>(initialToDos);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const todo: ToDo = {
      value: inputValue ? inputValue : '',
      done: false
    }
    const todosNew: ToDo[] = todos.concat(todo);
    setTodos(todosNew);
    setInputValue('');
  }

  const handleClick = (index: number) => {
    const todosNew = todos.map((todo: ToDo, todoIndex: number) => {
      return {
        ...todo,
        done: todoIndex === index ? !todo.done : todo.done
      }
    });
    setTodos(todosNew);
  }

  return (
    <div className="ToDos">
      <h1>ToDos (Local)</h1>
      <Form
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {todos ? (
        <List
          todos={todos}
          handleClick={handleClick}
        />
      ) : undefined }
     </div>
  )
}

export default ToDosLocal;
