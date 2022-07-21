// new post component based on new post form
import React from 'react';
import { NavLink } from 'react-router-dom';
import './sw_style.css';

// new post component based on new post form
function Dashboard() {
  return (
    <div>
      <div className="sw-100">
        <div className="">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <NavLink to="#">NavLinkrticles</NavLink>
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
                    <strong>@Kiprono</strong>
                    welcome to your dashboard. You can now track records of your
                    work here. feel free to seek
                    <NavLink to="#">help</NavLink>
                    from our team incase of any issue.
                  </div>
                  <h1 className="title">Posts Statistics</h1>
                  <table className="table table is-bordered is-striped is-hoverable is-fullwidth">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Post</th>
                        <th>Views</th>
                        <th>Likes</th>
                        <th>Comments</th>
                        <th>Bookmarks</th>
                        <th>Shares</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>
                          <a
                            href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
                            title="West Bromwich Albion F.C."
                          >
                            West Bromwich Albion
                          </a>
                        </td>
                        <td>38</td>
                        <td>10</td>
                        <td>13</td>
                        <td>15</td>
                        <td>34</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>
                          <a
                            href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C."
                            title="Crystal Palace F.C."
                          >
                            Crystal Palace
                          </a>
                        </td>
                        <td>38</td>
                        <td>11</td>
                        <td>9</td>
                        <td>18</td>
                        <td>39</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td>
                          <a
                            href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth"
                            title="A.F.C. Bournemouth"
                          >
                            AFC Bournemouth
                          </a>
                        </td>
                        <td>38</td>
                        <td>11</td>
                        <td>9</td>
                        <td>18</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>
                          <a
                            href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
                            title="Sunderland A.F.C."
                          >
                            Sunderland
                          </a>
                        </td>
                        <td>38</td>
                        <td>9</td>
                        <td>12</td>
                        <td>17</td>
                        <td>48</td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>
                          <a
                            href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
                            title="Sunderland A.F.C."
                          >
                            Sunderland
                          </a>
                        </td>
                        <td>38</td>
                        <td>9</td>
                        <td>12</td>
                        <td>17</td>
                        <td>48</td>
                      </tr>
                      <tr>
                        <th>4</th>
                        <td>
                          <a
                            href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
                            title="Sunderland A.F.C."
                          >
                            Sunderland
                          </a>
                        </td>
                        <td>38</td>
                        <td>9</td>
                        <td>12</td>
                        <td>17</td>
                        <td>48</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
