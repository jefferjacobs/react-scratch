import React from 'react';
import { Link } from 'react-router-dom';

function StateNav() {
  return (
    <div className="StateNav">
      <ul>
        <li>
          <Link to="/state/local">Local</Link>
        </li>
        <li>
          <Link to="/state/parent">Parent</Link>
        </li>
        <li>
          <Link to="/state/global">Global</Link>
        </li>
      </ul>
    </div>
  )
}

export default StateNav;