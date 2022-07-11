// get all Posts from redux and display list
// use useffect, useselector
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getUsers as getUserById } from "../Redux/Actions/actions";

// create component, get Posts from state and display list
const Post = () => {
  const posts = useSelector((state) => state.posts);
  const userById = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // useEffect to get Posts from redux if there are posts and users in state
  useEffect(() => {
    if (posts.length === 0 && userById.length === 0) {
      dispatch(getPosts());
      dispatch(getUserById());
    }
  }
  , [posts, userById, dispatch]);
  
  // useEffect(() => {
  //   if (posts.length === 0) {
  //     dispatch(getPosts());
  //     dispatch(getUserById());
  //   }
  // }, [dispatch]);

  return (
    // if author === users.id, author is user.username and user.image ... use the logics to display the user info and image in the post page.
    <div>
      {/* //loop through users and store so i can use it in the post page */}
      {/* {userById.map((user) => (
        <div key={user.id}>
          <h1>{user.username}</h1>
          <img src={user.image} alt="user" />
        </div>
      ))} */}
      {posts.map((post) => (
        <article className="art-card" key={post.id}>
          <div className="">
            <div className="">
              <p>
                <p className="is-flex">
                  <figure className="media-left">
                    <p className="image is-32x32 user-img">
                      <img
                        className="is-rounded"
                        // from the users array, find the user with the same id as the post.author

                      />  
                    </p>
                  </figure>
                  {/* <small>{post.author.name}</small>{" "} */}
                  //compare 
                  <small>{post.created_at}</small>
                </p>
                <h3 className="art-title">{post.title}</h3>
                <p>{post.content}</p>
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="tag is-success is-light">
                    {post.category}
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
