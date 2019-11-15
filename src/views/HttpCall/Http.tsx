import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HttpXHR from './Http-XHR';
import HttpNav from './Http-Nav';
import HttpAxios from './Http-Axios';

function HttpCall() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      console.log(xhr)
    })
    xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
    xhr.send();
  }

  return (
    <div className="HttpCall Content-Wrapper">
      <Router>
        <Fragment>
          <HttpNav />
          <div className="Content">
            <Switch>
              <Route path="/http/xhr" component={HttpXHR} />
              <Route path="/http/axios" component={HttpAxios} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  )
}

export default HttpCall;