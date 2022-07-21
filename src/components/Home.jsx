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
            <NavLink>Articles</NavLink>
          </li>
          <li>
            <NavLink>Music</NavLink>
          </li>
          <li>
            <NavLink>Videos</NavLink>
          </li>
          <li>
            <NavLink>News</NavLink>
          </li>
          <li>
            <NavLink>Marketplace</NavLink>
          </li>
          <li>
            <NavLink>Trending</NavLink>
          </li>
          <li>
            <NavLink>Documents</NavLink>
          </li>
        </ul>
      </div>
      <Post />
    </div>
  );
}

export default Home;
