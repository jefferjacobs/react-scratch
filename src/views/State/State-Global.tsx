import React, { useState, Fragment } from 'react';
import Form from '../../components/Todos/Form';
import List from '../../components/Todos/List';
import { Todo } from '../../interfaces/Todos-Interface';
import { StateContextConsumer } from '../../context/todo-context';

function StateGlobal() {

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }

  const handleSubmit = (evt: React.FormEvent) => {
    // evt.preventDefault();
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
      <h1>Global State</h1>
      <StateContextConsumer>
        { todos => {
          return (
            <Fragment>
              <Form
                inputValue={inputValue}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
              { todos ? (
                <List
                  todos={todos}
                  handleClick={handleClick}
                />
              ) : undefined }
            </Fragment>
          )
        }}
      </StateContextConsumer>
      {/* <Form
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {todos ? (
        <List
          todos={todos}
          handleClick={handleClick}
        />
      ) : undefined } */}
     </div>
  )
}

export default StateGlobal;
