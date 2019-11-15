import React, { Fragment, useState, useEffect, EffectCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import State from '../State/State';
import Params from '../Params/Params';
import { StateContextProvider, StateContextInterface } from '../../context/todo-context';
import { Todo } from '../../interfaces/Todos-Interface';
import HttpCall from '../HttpCall/Http';

function App() {

  const initialTodos: Todo[] = [
    {
      value: 'Clean the kitchen!!!!',
      done: false
    },
    {
      value: 'Wash the car',
      done: true
    }
  ];

  const [todos, setTodos] = useState(initialTodos);
  const todosContext: StateContextInterface = {
    todos: todos,
    setTodos: setTodos,
  }

  return (
    <div className="App">
      <StateContextProvider value={todosContext}>
        <Router>
          <Fragment>
            <Nav />
            <div className="Content">
              <Switch>
                <Route path="/state" component={State} />
                <Route path="/params" component={Params} />
                <Route path="/http" component={HttpCall} />
                <Redirect to="/state" />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </StateContextProvider>
    </div>
  )
}

export default App;
