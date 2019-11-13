import * as React from 'react';
import Task from './Task';
import { ToDo } from '../../interfaces/ToDos';

interface Props {
  todos: ToDo[];
  handleClick: (index: number) => void;
}

function List(props: Props) {
  return (
    <div className="List">
      {props.todos.map(
        (todo, index) => {
          return (
            <Task
              key={index}
              index={index}
              todo={todo}
              handleClick={props.handleClick}
            />
          )
        }
      )}
    </div>
  )
}

export default List;