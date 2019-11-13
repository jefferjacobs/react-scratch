import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/todos-local">Todos (Local)</Link>
        </li>
        <li>
          <Link to="/todos-global">Todos (Global)</Link>
        </li>
        <li>
          <Link to="/todos-parent">Todos (Parent)</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;