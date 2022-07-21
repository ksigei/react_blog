import React from 'react';
import { NavLink } from 'react-router-dom';
import Post from './Post';
import Slider from './Slider';

import './sw_style.css';

function Home() {
  return (
    <div>
      <Slider />

      <div className="tabs">
        <ul>
          <li className="is-active">
            <NavLink to="#">Articles</NavLink>
          </li>
          <li>
            <NavLink to="#">Music</NavLink>
          </li>
          <li>
            <NavLink to="#">Videos</NavLink>
          </li>
          <li>
            <NavLink to="#">News</NavLink>
          </li>
          <li>
            <NavLink to="#">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="#">Trending</NavLink>
          </li>
          <li>
            <NavLink to="#">Documents</NavLink>
          </li>
        </ul>
      </div>
      <Post />
    </div>
  );
}

export default Home;
