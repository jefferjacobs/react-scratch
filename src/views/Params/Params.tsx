import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParamsNav from './Params-Nav';
import ParamsView from './Params-View';

function Params() {
  return (
    <div className="Params Content-Wrapper">
      <Router>
        <Fragment>
          <ParamsNav />
          <div className="Content Content-Padded">
            <Switch>
              <Route path={'/params/:param'} component={ParamsView} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  )
}

export default Params;