import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import ToDosLocal from './ToDos/ToDos-Local';
import ToDosGlobal from './ToDos/ToDos-Global';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Nav />
          <div className="Content">
            <Switch>
              <Route path="/todos-local" component={ToDosLocal} />
              <Route path="/todos-global" component={ToDosGlobal} />
              <Redirect to="/todos-local" />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  )
}

export default App;
