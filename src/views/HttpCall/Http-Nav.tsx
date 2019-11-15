import React from 'react';
import { Link } from 'react-router-dom';

function HttpNav() {
  return (
    <div className="HttpNav Nav-Sub">
      <ul>
        <li>
          <Link to="/http/xhr">XHR</Link>
        </li>
        <li>
          <Link to="/http/axios">Axios</Link>
        </li>
      </ul>
    </div>
  )
}

export default HttpNav;