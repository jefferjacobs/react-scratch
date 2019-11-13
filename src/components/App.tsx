import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import State from '../views/State/State';

function App() {

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Nav />
          <div className="Content">
            <Switch>
              <Route path="/state" component={State} />
              <Redirect to="/state" />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  )
}

export default App;
