// new post component based on new post form
import React from 'react';
import { NavLink } from 'react-router-dom';
import Post from './Post';
import './sw_style.css';

// new post component based on new post form
function Articles() {
  return (
    <div>
      <div className="tabs">
        <ul>
          <li className="is-active">
            <NavLink to="#">All</NavLink>
          </li>
          <li>
            <NavLink to="#">Sports</NavLink>
          </li>
          <li>
            <NavLink to="#">Politics</NavLink>
          </li>
          <li>
            <NavLink to="#">Science</NavLink>
          </li>
          <li>
            <NavLink to="#">Education</NavLink>
          </li>
          <li>
            <NavLink to="#">Tech</NavLink>
          </li>
          <li>
            <NavLink to="#">Movies</NavLink>
          </li>
          <li>
            <NavLink to="#">Conspirancy</NavLink>
          </li>
          <li>
            <NavLink to="#">Religion</NavLink>
          </li>
        </ul>
      </div>
      <Post />
    </div>
  );
}

export default Articles;
