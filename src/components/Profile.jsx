// new post component based on new post form
import React from 'react';
import { Link } from 'react-router-dom';

import './sw_style.css';

// new post component based on new post form
function Profile() {
  return (
    <div>
      <div className="sw-100">
        <div className="">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <a>Preview</a>
              </li>
              <li>
                <a>Edit</a>
              </li>
            </ul>
          </div>
          <div className="notifications">
            <div class="notification is-warning">
              <button class="delete"></button>
              <strong>Congratulations!</strong>,<a>@Kiprono</a> you have reached
              500 Followers and 250 Following. It now time to monetize your
              account.
              <Link to="/dashboard" class="buttons">
                <button class="button is-link is-light">Dashboard</button>
              </Link>
            </div>
            <article className="media">
              <div className="media-content">
                <div className="content is-align-content-center">
                  <section className="section user-stat sw_flex g_5">
                    <article className="media user-stat-img">
                      <div className="media-content">
                        <nav className="level">
                          <div className="level-left">
                            <figure className="image is-96x96">
                              <img
                                className="is-rounded"
                                src="https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296_960_720.jpg"
                              />
                            </figure>
                          </div>
                        </nav>
                      </div>
                      <div className="media-right bg-blur has-text-black-bis">
                        <h3>Kiprono Japhet</h3>
                        <h4>@kip</h4>
                      </div>
                    </article>

                    <nav className="tags tags are-medium sw_flex g_5 bg-blur has-text-black-bis">
                      <div className="has-text-centered">
                        <div>
                          <p className="heading">Following</p>
                          <p className="title">
                            <span className="tag is-link is-light">123</span>
                          </p>
                        </div>
                      </div>
                      <div className="has-text-centered">
                        <div>
                          <p className="heading">Followers</p>
                          <p className="title">
                            <span className="tag is-link is-light">102k</span>
                          </p>
                        </div>
                      </div>
                      <div className="has-text-centered">
                        <div>
                          <p className="heading">Likes</p>
                          <p className="title">
                            <span className="tag is-link is-light">10k</span>
                          </p>
                        </div>
                      </div>
                    </nav>
                  </section>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
