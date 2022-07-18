import React from 'react';
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
            <a>Articles</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Marketplace</a>
          </li>
          <li>
            <a>Trending</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
        </ul>
      </div>
      <Post />

    </div>
  );
}

export default Home;
