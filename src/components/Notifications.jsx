// new post component based on new post form
import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink>Articles</NavLink>
              </li>
              <li>
                <NavLink>Music</NavLink>
              </li>
              <li>
                <NavLink>Videos</NavLink>
              </li>
              <li>
                <NavLink>Documents</NavLink>
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
                    Primar lorem ipsum dolor sit amet, consectetur adipiscing
                    elit lorem ipsum dolor.
                    <strong>Pellentesque risus mi</strong>, tempus quis placerat
                    ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                    fringilla. Nullam gravida purus diam, et dictum
                    <NavLink>felis venenatis</NavLink> efficitur.
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
