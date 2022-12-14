import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sw_style.css';

function Navbar() {
  return (
    <nav>
      <Link
        to="/"
        className="brand has-text-grey-dark desktop"
        href="https://saucewire.com"
      >
        <img src="../.././logo_sw.png" alt="Saucewire" />
        <h3>Saucewire</h3>
      </Link>
      <div className="icons">
        <NavLink to="/" className="level-item">
          <span className="icon is-large">
            <i className="uil uil-estate has-text-grey-dark fa-2x" />
          </span>
        </NavLink>
        <NavLink to="/notifications" className="level-item">
          <span className="icon is-large badge" data-badge="27">
            <i className="uil uil-bell has-text-grey-dark fa-2x" />
          </span>
        </NavLink>
        <NavLink to="/bookmarks" className="level-item">
          <span className="icon is-large badge" data-badge="27">
            <i className="uil uil-bookmark has-text-grey-dark fa-2x" />
          </span>
        </NavLink>
        <NavLink to="/articles" className="level-item">
          <span className="icon is-large badge" data-badge="27">
            <i className="uil uil-newspaper has-text-grey-dark fa-2x" />
          </span>
        </NavLink>
        {/* <NavLink to="/articles" className="level-item">
          <span className="icon is-large">
            <i className="uil uil-shopping-bag has-text-grey-dark fa-2x" />
          </span>
        </NavLink> */}
        <NavLink to="/newpost" className="level-item">
          <span className="icon is-large">
            <i className="uil uil-plus has-text-grey-dark fa-2x" />
          </span>
        </NavLink>
        <NavLink to="/profile" className="level-item mobile">
          <span className="icon is-large">
            <i className="uil uil-user has-text-link fa-2x" />
          </span>
        </NavLink>
        <div className="accounts">
          <NavLink to="/profile" className="level-item">
            <span className="icon is-large">
              <i className="uil uil-user has-text-link fa-2x" />
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
