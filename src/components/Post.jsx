// get all Posts from redux and display list
// use useffect, useselector
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { getPosts, getUsers } from "../Redux/Actions/actions";

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
  const getUserName = (id) => {
    const user = userById.find((user) => user.id === id);
    return user ? user.username : "";
  };

  return (
    <div>
      {posts.map((post) => (
        <article className="art-card" key={post.id}>
          <div className="">
            <div className="">
              <div>
                <div className="is-flex">
                  <figure className="media-left">
                    <p className="image is-32x32 user-img">
                      <img
                        className="is-rounded"
                        // from the users array, find the user with the same id as the post.author
                      />
                    </p>
                  </figure>
                  <div className="is-flex">
                    <span className="user-name">
                      {post.author.username}
                    </span>
                  </div>

                  <small>
                    <TimeAgo date={post.created_at} formatter={formatter} />
                  </small>
                </div>
                <h3 className="art-title">{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="tag is-success is-light">
                    {post.category.name}
                  </span>
                </a>
                <a className="level-item">
                  <span className="has-text-grey">3 min read</span>
                </a>
                <a className="level-item">
                  <span className="has-text-grey">.</span>
                </a>
                <a className="level-item">
                  <span className="has-text-grey">
                    since you follow <strong>@kip</strong>
                  </span>
                </a>
              </div>
              <div className="level-right">
                <a className="level-item">
                  <span className="icon">
                    <i className="uil uil-bookmark has-text-grey-dark"></i>
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon">
                    <i className="uil uil-share has-text-grey-dark"></i>
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon">
                    <i className="uil uil-ellipsis-h has-text-grey-dark"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <section>
            <figure className="image is-128x128 is-centered art-img">
              <img src={post.image} />
            </figure>
          </section>
        </article>
      ))}
    </div>
  );
};
export default Post;
