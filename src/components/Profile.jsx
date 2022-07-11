// user profile
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, deleteUsers,  } from "../Redux/Actions/actions";
import { Navigate } from "react-router-dom";

// create component, get user from state and display user
const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id === null) {
      dispatch(getUser());
    }
  }, []);

  // return user as list so i can use it in the post page
  return (
    // also add option to delete user, show user's posts, and show user's comments, and update user info.
    <div>
      <h1>{user.username}</h1>
      <img src={user.image} alt="user" />
      <button onClick={() => dispatch(deleteUsers())}>Delete User</button>
      {/* update */}
      <Navigate to="/update-user" />
      <Navigate to="/posts" />
      <Navigate to="/comments" />
      <Navigate to="/update" />
    </div>

  );
}

export default Profile;