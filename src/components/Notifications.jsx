import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './sw_style.css';

// new post component based on new post form
function Notifications() {
  return (
    <div>
      <div className="sw-100">
        <div className="">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <NavLink to="#">Articles</NavLink>
              </li>
              <li>
                <NavLink to="#">Music</NavLink>
              </li>
              <li>
                <NavLink to="#">Videos</NavLink>
              </li>
              <li>
                <NavLink to="#">Documents</NavLink>
              </li>
            </ul>
          </div>
          <div className="notifications">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <div className="notification is-warning">
                    <button className="delete" name="button" type="button">
                      btn
                    </button>
                    <strong>Congratulations!</strong>
                    <NavLink to="#">@Kiprono</NavLink>
                    you have reached 500 Followers and 250 Following. It now
                    time to monetize your account.
                    <Link to="/dashboard" className="buttons">
                      <button
                        className="button is-link is-light"
                        name="button"
                        type="button"
                      >
                        Dashboard
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
