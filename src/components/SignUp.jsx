import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUsers } from "../Redux/Actions/actions";

function SignUp() {
  // on submit, dispatch the action to post the user
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postUsers(e.target.username.value, e.target.password.value));
  };
  // get the user from the state
  const user = useSelector((state) => state.user);
  // if user is not empty, redirect to the profile page
  // if (user.id) {
  //   return <Navigate to="/profile" />;
  // }
  // if user is empty, display the form

  return (
    // create a new user using name, email, password, and image and use onSubmit to post the user
    <div>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" name="username" />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" name="password" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
