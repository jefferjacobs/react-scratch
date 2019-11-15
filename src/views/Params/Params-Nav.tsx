import React from 'react';
import { Link } from 'react-router-dom';

function ParamsNav() {
  return (
    <div className="ParamsNav Nav-Sub">
      <ul>
        <li>
          <Link to="/params/cool">Cool</Link>
        </li>
        <li>
          <Link to="/params/things">Things</Link>
        </li>
        <li>
          <Link to="/params/bro">Bro</Link>
        </li>
      </ul>
    </div>
  )
}

export default ParamsNav;