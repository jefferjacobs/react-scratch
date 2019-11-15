import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HttpXHR from './Http-XHR';
import HttpNav from './Http-Nav';
import HttpAxios from './Http-Axios';

function HttpCall() {

  return (
    <div className="HttpCall Content-Wrapper">
      <Router>
        <Fragment>
          <HttpNav />
          <div className="Content">
            <Switch>
              <Route path="/http/xhr" component={HttpXHR} />
              <Route path="/http/axios" component={HttpAxios} />
              <Redirect to="/http/xhr" />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  )
}

export default HttpCall;