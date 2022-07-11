import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Users from "./components/Users";
import NewPost from "./components/NewPost";
import SignIn from "./components/SignIn";
import Notifications from "./components/Notifications";
import "./components/sw_style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <Rightbar />
      </div>
    </Router>
  );
}

export default App;
