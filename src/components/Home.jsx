import React from "react";
import Users from "./Users";
import Post from "./Post";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Ad from "./Ad";
import "./sw_style.css";
import { render } from "react-dom";
function Home() {
  return (
    <div>
      <div className="sw_main">
        <Navbar />
        <div className="col-main">
          <Post />
        </div>
        <div className="col-right">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
