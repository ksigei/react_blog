import React from "react";
import Users from "./Users";
import Post from "./Post";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Ad from "./Ad";
import Slider from "./Slider";
import "./sw_style.css";
import { render } from "react-dom";
function Home() {
  return (
    <div>
      <div className="sw_main">
        <Navbar />
        <div className="col-main">
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
                <a>Documents</a>
              </li>
            </ul>
          </div>
          <Post />
          <Ad />
        </div>
        <div className="col-right">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
