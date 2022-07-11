// get all Posts from redux and display list
// use useffect, useselector
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Redux/Actions/actions";

// create component, get Posts from state and display list
const Post = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, []);

  return (
    <div>
      
      {posts.map((post) => (
        <article className="art-card" key={post.url}>
          <div className="">
            <div className="">
              <p>
                <p className="is-flex">
                  <figure className="media-left">
                    <p className="image is-32x32 user-img">
                      <img
                        className="is-rounded"
                        src="https://cdn.pixabay.com/photo/2022/06/02/19/25/giraffes-7238815_960_720.jpg"
                      />
                    </p>
                  </figure>
                  <strong>{post.author}</strong> <small>{post.author}</small>{" "}
                  <small>{post.created_at}</small>
                </p>
                <h3 className="art-title">{post.title}</h3>
                {post.content}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="tag is-success is-light">{post.category}</span>
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
                    <i class="uil uil-bookmark has-text-grey-dark"></i>
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon">
                    <i class="uil uil-share has-text-grey-dark"></i>
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon">
                    <i class="uil uil-ellipsis-h has-text-grey-dark"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <section>
            <figure className="image is-128x128 is-centered art-img">
              <img src="{post.image}" />
              {/* {post.image} */}
            </figure>
          </section>
        </article>
      ))}
    </div>
  );
};
export default Post;
