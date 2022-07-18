// new post component based on new post form
import React from "react";
import Post from "./Post";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import "./sw_style.css";

// new post component based on new post form
function Articles() {
  return (
    <div>
      <div className="sw-100">
        <div className="">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <a>All</a>
              </li>
              <li>
                <a>Sports</a>
              </li>
              <li>
                <a>Politics</a>
              </li>
              <li>
                <a>Science</a>
              </li>
              <li>
                <a>Education</a>
              </li>
              <li>
                <a>Tech</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Conspirancy</a>
              </li>
              <li>
                <a>Religion</a>
              </li>
            </ul>
          </div>
          <div className="notifications">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <Post />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
