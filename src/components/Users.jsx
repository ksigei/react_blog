// get all users from redux and display list
// use useffect, useselector
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Redux/Actions/actions";

// create component, get users from state and display list
const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, []);

  // return users as list so i can use it in the post page
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.username}</h1>
          <img src={user.image} alt="user" />
        </div>
      ))}
    </div>
  );
};

export default Users;
