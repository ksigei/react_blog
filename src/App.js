import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Users from "./components/Users";
import NewPost from "./components/NewPost";
import SignIn from "./components/SignIn";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import Articles from "./components/Articles";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

import "./components/sw_style.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App sw_main sh-100">
        <div className="col-left no-scroll">
          <Navbar />
        </div>
        <div className="col-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <div className="col-right">
          <Rightbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
