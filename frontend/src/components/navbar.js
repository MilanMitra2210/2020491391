import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        {/* Container wrapper */}
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            {/* Left links */}
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Upcoming Trains 
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/search"
                >
                  Search Train
                </Link>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
    </div>
  );
};

export default Navbar;