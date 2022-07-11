import React from "react";

function Rightbar() {
  return (
    <article className="is-desktop">
      <section className="section user-stat">
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

        <nav className="level bg-blur has-text-black-bis">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="title">
                <span className="tag is-primary is-light">123</span>
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="title">
                <span className="tag is-primary is-light">102k</span>
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">
                <span className="tag is-primary is-light">10k</span>
              </p>
            </div>
          </div>
        </nav>
      </section>
      <section className="section">
        <div>
          <h3 className="heading">Topics</h3>
        </div>
        <div className="tags">
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
        </div>
      </section>
      <section className="section">
        <div>
          <h3 className="heading">People to follow</h3>
        </div>
        <div className="tags">
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
          <span className="tag is-warning">Topics</span>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Saucewire</strong> by <a href="#">SaucewireInc</a>. Our
            terms of services
            <a href="#">Terms of service</a>. The website content is licensed{" "}
            <a href="#">license</a>.
          </p>
        </div>
      </footer>
    </article>
  );
}

export default Rightbar;
