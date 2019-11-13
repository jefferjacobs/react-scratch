import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import { Todo } from '../../interfaces/Todos-Interface';
import TodosContext from '../App';

function TodosGlobal() {

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    // const todo: Todo = {
    //   value: inputValue ? inputValue : '',
    //   done: false
    // }
    // const todosNew: Todo[] = todos.concat(todo);
    // setTodos(todosNew);
    // setInputValue('');
  }

  const handleClick = (index: number) => {
    // const todosNew = todos.map((todo: Todo, todoIndex: number) => {
    //   return {
    //     ...todo,
    //     done: todoIndex === index ? !todo.done : todo.done
    //   }
    // });
    // setTodos(todosNew);
  }

  return (
    <div className="Todos-Global">
      <h1>Todos (Global)</h1>
      <Form
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodosContext.Consumer>
        { value => value }
      </TodosContext.Consumer>
     </div>
  )
}

export default TodosGlobal;
