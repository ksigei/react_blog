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
        <ul className="tags">
          <li className="is-active tag is-link is-light">
            <NavLink to="#">Articles</NavLink>
          </li>
          <li className="tag is-link is-light">
            <NavLink to="#">Music</NavLink>
          </li>
          <li className="tag is-link is-light">
            <NavLink to="#">Videos</NavLink>
          </li>
          <li className="tag is-link is-light">
            <NavLink to="#">News</NavLink>
          </li>
          <li className="tag is-link is-light">
            <NavLink to="#">Marketplace</NavLink>
          </li>
          <li className="tag is-link is-light">
            <NavLink to="#">Trending</NavLink>
          </li>
          <li className="tag is-link is-light">
            <NavLink to="#">Documents</NavLink>
          </li>
        </ul>
      </div>
      <Post />
    </div>
  );
}

export default Home;
