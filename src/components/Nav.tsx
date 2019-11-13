import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/todos-local">ToDos (Local)</Link>
        </li>
        <li>
          <Link to="/todos-global">ToDos (Global)</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;