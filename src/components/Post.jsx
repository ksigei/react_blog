// get all Posts from redux and display list
// use useffect, useselector
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { getPosts, getUsers } from '../Redux/Actions/actions';

// create component, get Posts from state and display list
const Post = () => {
  const posts = useSelector((state) => state.posts);
  const userById = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // useEffect to get Posts from redux if there are posts and users in state
  useEffect(() => {
    if (posts.length === 0 && userById.length === 0) {
      dispatch(getPosts());
      dispatch(getUsers());
    }
  }, [posts, userById, dispatch]);
  const formatter = buildFormatter(frenchStrings);
  // user by id to get user name
  // const getUserName = (id) => {
  //   const user = userById.find((user) => user.id === id);
  //   return user ? user.username : "";
  // };

  return (
    <div>
      {posts.map((post) => (
        <article className="art-card" key={post.id}>
          <div className="art-col-1">
            <div className="">
              <div>
                <div className="is-flex">
                  <figure className="media-left">
                    <p className="image is-32x32 user-img">
                      <img
                        className="is-rounded"
                        src={post.image}
                        alt="Saucewire"
                      />
                    </p>
                  </figure>
                  <div className="is-flex">
                    {/* <span className="user-name">{post.author.username}</span> */}
                    <span className="user-name">K Sigei</span>
                  </div>

                  <small>
                    <TimeAgo date={post.created_at} formatter={formatter} />
                  </small>
                </div>
                <h4 className="art-title">{post.title}</h4>
                <p className="art-excerpt">{post.excerpt}</p>
              </div>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <NavLink to="#" className="level-item">
                  <span className="tag is-success is-light">
                    {post.category.name}
                  </span>
                </NavLink>
                <NavLink to="#" className="level-item">
                  <span className="has-text-grey">3 min read</span>
                </NavLink>
                <NavLink to="#" className="level-item">
                  <span className="has-text-grey">.</span>
                </NavLink>
                <NavLink to="#" className="level-item desktop">
                  <span className="has-text-grey">
                    since you follow
                    <strong>@kip</strong>
                  </span>
                </NavLink>
              </div>
              <div className="level-right">
                <NavLink to="#" className="level-item">
                  <span className="icon">
                    <i className="uil uil-bookmark has-text-grey-dark" />
                  </span>
                </NavLink>
                <NavLink to="#" className="level-item">
                  <span className="icon">
                    <i className="uil uil-share has-text-grey-dark" />
                  </span>
                </NavLink>
                <NavLink to="#" className="level-item">
                  <span className="icon">
                    <i className="uil uil-ellipsis-h has-text-grey-dark" />
                  </span>
                </NavLink>
              </div>
            </nav>
          </div>
          <section className="art-col-2">
            <figure className="art-img">
              <img src={post.image} alt="Saucewire posts" />
            </figure>
          </section>
        </article>
      ))}
    </div>
  );
};
export default Post;
