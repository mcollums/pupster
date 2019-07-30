import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("home")} className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#discover" onClick={() => props.handlePageChange("discover")} className="nav-link">
            Discover
        </a>
      </li>
      <li className="nav-item">
        <a href="#search" onClick={() => props.handlePageChange("search")} className="nav-link">
        Search
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;