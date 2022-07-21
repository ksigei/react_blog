import React from 'react';
import { useDispatch } from 'react-redux';
import { postUsers } from '../Redux/Actions/actions';

function SignIn() {
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postUsers(e.target.username.value, e.target.password.value));
  };
  // const user = useSelector((state) => state.user);
  // if (user.id) {
  //   return <Navigate to="/profile" />;
  // }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <form className="box">
          <div className="field">
            <label htmlFor="email" className="label">
              Email
              <div id="email" className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="e.g. me@example.com"
                />
              </div>
            </label>
          </div>

          <div className="field">
            <label htmlFor="password" className="label">
              Password
              <div id="password" className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="********"
                />
              </div>
            </label>
          </div>

          <button className="button is-primary" name="button" type="button">
            Sign in
          </button>
        </form>
      </form>
    </div>
  );
}

export default SignIn;
