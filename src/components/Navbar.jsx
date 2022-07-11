import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./sw_style.css";

function Navbar() {
  return (
    <nav className="col-left is-desktop">
      <Link to="/" className="brand has-text-grey-dark" href="https://saucewire.com">
        <img src="../.././logo_sw.png" />
        <h3>Saucewire</h3>
      </Link>
      <div className="icons">
        <NavLink to="/" className="level-item">
          <span className="icon is-large">
            <i className="uil uil-estate has-text-grey-dark fa-2x"></i>
          </span>
        </NavLink>
        <NavLink to="/notifications" className="level-item">
          <span className="icon is-large">
            <i class="uil uil-bell has-text-grey-dark fa-2x"></i>
          </span>
        </NavLink>
        <NavLink to="/bookmarks" className="level-item">
          <span className="icon is-large">
            <i class="uil uil-bookmark has-text-grey-dark fa-2x"></i>
          </span>
        </NavLink>
        <NavLink to="/articles" className="level-item">
          <span className="icon is-large">
            <i class="uil uil-newspaper has-text-grey-dark fa-2x"></i>
          </span>
        </NavLink>
        <NavLink to="/newpost" className="level-item">
          <span className="icon is-large">
            <i class="uil uil-plus has-text-grey-dark fa-2x"></i>
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
