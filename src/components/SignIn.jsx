import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { postUsers } from "../Redux/Actions/actions";

function SignIn() {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postUsers(e.target.username.value, e.target.password.value));
  };
  const user = useSelector((state) => state.user);
  // if (user.id) {
  //   return <Navigate to="/profile" />;
  // }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <form class="box">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. me@example.com"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="********" />
            </div>
          </div>

          <button class="button is-primary">Sign in</button>
        </form>
      </form>
    </div>
  );
}

export default SignIn;
