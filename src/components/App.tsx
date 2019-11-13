import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import TodosLocal from './Todos/Todos-Local';
import TodosGlobal from './Todos/Todos-Global';
import TodosFromParent from './Todos/Todos-Parent';
import { Todo } from '../interfaces/Todos-Interface';

function App() {

  const initialTodosForChild: Todo[] = [
    {
      value: 'Clean the kitchen',
      done: false
    },
    {
      value: 'Wash the car',
      done: true
    }
  ];

  const [todosForChild, setTodosForChild] = useState<Todo[]>(initialTodosForChild);

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Nav />
          <div className="Content">
            <Switch>
              <Route path="/todos-local" component={TodosLocal} />
              <Route path="/todos-global" component={TodosGlobal} />
              <Route path="/todos-parent" component={() => <TodosFromParent todos={todosForChild} setTodos={setTodosForChild} /> }/>
              <Redirect to="/todos-local" />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  )
}

export default App;
