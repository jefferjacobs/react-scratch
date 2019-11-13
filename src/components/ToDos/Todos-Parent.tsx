import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import { Todo } from '../../interfaces/Todos-Interface';

interface Props {
  todos: Todo[];
  setTodos: any;
}

function TodosFromParent(props: Props) {

  const { todos, setTodos } = props;
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const todo: Todo = {
      value: inputValue ? inputValue : '',
      done: false
    }
    const todosNew: Todo[] = todos.concat(todo);
    setTodos(todosNew);
    setInputValue('');
  }

  const handleClick = (index: number) => {
    const todosNew = todos.map((todo: Todo, todoIndex: number) => {
      return {
        ...todo,
        done: todoIndex === index ? !todo.done : todo.done
      }
    });
    setTodos(todosNew);
  }

  return (
    <div className="Todos-Parent">
      <h1>Todos (Parent)</h1>
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

export default TodosFromParent;
