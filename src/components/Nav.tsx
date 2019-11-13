import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/state">State</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;